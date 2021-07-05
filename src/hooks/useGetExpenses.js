import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { useAuth } from '../context/authContext';
//import { getDaysInMonth } from 'date-fns';

const useGetExpenses = () => {
    const [expenses, setExpenses] = useState([]);
    const { user } = useAuth();
    const [lastExpense, setLastExpense] = useState(null);
    const [moreExpensesToLoad, setMoreExpensesToLoad] = useState(false)

    const getMoreExpenses = () => {
        db.collection('expenses')
            .where('usuario', '==', user.uid)
            .orderBy('fecha', 'desc')
            .limit(10)
            .startAfter(lastExpense) //empieza después del último gasto
            .onSnapshot((snapshot) => {
                if (snapshot.docs.length > 0) {
                    setLastExpense(snapshot.docs[snapshot.docs.length - 1]);
                    setExpenses(expenses.concat(snapshot.docs.map((expense)=>{
                        return {...expense.data(), id: expense.id}
                    })))
                } else {
                    setMoreExpensesToLoad(false);
                }
            })
    }

    useEffect(() => {
        const unsuscribe = db.collection('expenses')
            .where('usuario', '==', user.uid)
            .orderBy('fecha', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                if (snapshot.docs.length > 0) {
                    setLastExpense(snapshot.docs[snapshot.docs.length - 1]);
                    setMoreExpensesToLoad(true);
                } else {
                    setMoreExpensesToLoad(false);
                }
                setExpenses(snapshot.docs.map((expense) => {
                    //todas las propiedades que vienen de gastos las convinamos con las anteriores
                    return { ...expense.data(), id: expense.id }
                }));
            });
        return unsuscribe;
    }, [user])

    return [expenses, getMoreExpenses, moreExpensesToLoad]
}

export default useGetExpenses
