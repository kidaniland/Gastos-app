import React from 'react';
import { Header, Title } from '../elements/Header';
import { Helmet } from 'react-helmet';
import BtnReturn from '../elements/BtnReturn';
import ResultsBar from './ResultsBar';
import ExpensesForm from './ExpensesForm';
import { useParams } from 'react-router';
import useGetaSingleExpense from '../hooks/useGetaSingleExpense';

const EditExpenses = () => {
    const { id } = useParams();
    const [ expense ] = useGetaSingleExpense(id);

    return (
        <>
        <Helmet>
            <title>Editar Gasto</title>
        </Helmet>
        <Header>
            <BtnReturn route="/listas"/>
            <Title>Editar Gasto</Title>
        </Header>
        <ExpensesForm expense={expense}/>
        <ResultsBar/>
    </>
    )
}

export default EditExpenses
