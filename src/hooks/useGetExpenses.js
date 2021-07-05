import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { useAuth } from '../context/authContext';
//import { getDaysInMonth } from 'date-fns';

const useGetExpenses = () => {
    const [expenses, setExpenses] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        const unsuscribe = db.collection('expenses')
            .where('usuario', '==', user.uid)
            .orderBy('fecha', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                setExpenses(snapshot.docs.map((expense)=>{
                    //todas las propiedades que vienen de gastos las convinamos con las anteriores
                    return {...expense.data(), id: expense.id}
                }));
            });
        return unsuscribe;
    }, [user])

    return [expenses]
}

export default useGetExpenses
