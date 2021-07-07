import React, { useState, useEffect, useContext } from 'react';
import useGetExpensesMonth from '../hooks/useGetExpensesMonth';


const totalSpendContext = React.createContext();

//hook
const useTotalintheMont = () => useContext(totalSpendContext);

const TotalSpendProvider = ({ children }) => {
    const [total, setTotal] = useState(0);
    const expenses = useGetExpensesMonth();
    useEffect(() => {
        let accumulated = 0;
        expenses.forEach((expense) => {
            accumulated += Number(expense.valor);
        });
        setTotal(accumulated);
    }, [expenses])

    return (
        <totalSpendContext.Provider value={{ total: total }}>
            {children}
        </totalSpendContext.Provider>
    )
}
export { TotalSpendProvider, useTotalintheMont }
