import { useState, useEffect } from 'react';
import { db } from './../firebase/firebaseConfig';
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns';
import { useAuth } from '../context/authContext';


const useGetExpensesMonth = () => {
    const [expenses, setExpenses] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const startOfMonthE = getUnixTime(startOfMonth(new Date()));
        const endOfMonthE = getUnixTime(endOfMonth(new Date()));

        if (user) {
            const unsuscribe = db.collection('expenses')
                .orderBy('fecha', 'desc')
                .where('fecha', '>=', startOfMonthE)
                .where('fecha', '<=', endOfMonthE)
                .where('usuario', '==', user.uid) //para no cargar los gastos de otros usuarios
                .onSnapshot((snapshot) => {
                    setExpenses(snapshot.docs.map((document) => {
                        return { ...document.data(), id: document.id }
                    }))
                })
            return unsuscribe
        }

    }, [user])

    return expenses
}

export default useGetExpensesMonth
