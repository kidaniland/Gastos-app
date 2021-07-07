import { useEffect, useState } from 'react';
import useGetExpensesMonth from './useGetExpensesMonth';


const useGetExpensesMonthByCategory = () => {
    const [expenseByCategory, setExpenseByCategory] = useState([]);
    const expenses = useGetExpensesMonth();

    useEffect(() => {
        //la función se ejecutará por cada elemento del gasto
        const sumOfExpenses = expenses.reduce((resultObjet, currentObjet) => {
            const currentCategory = currentObjet.categoria;
            const currentAmount = Number(currentObjet.valor);

            resultObjet[currentCategory] += currentAmount;

            return resultObjet

        }, {
            'comida': 0,
            'cuentas y pagos': 0,
            'hogar': 0,
            'transporte': 0,
            'salud e higiene': 0,
            'compras': 0,
            'diversion': 0,
        });

        //transformamos a elementos de un arreglo y actualizamos el gasto por categoría 
        setExpenseByCategory(Object.keys(sumOfExpenses).map((element) => {
            return { categoria: element, valor: sumOfExpenses[element] }
        }));

    }, [setExpenseByCategory, expenses])



    return expenseByCategory
}

export default useGetExpensesMonthByCategory
