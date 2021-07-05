import React from 'react';
import { Header, Title } from '../elements/Header';
import { Helmet } from 'react-helmet';
import BtnReturn from '../elements/BtnReturn';
import ResultsBar from './ResultsBar';

const ExpensesByCategory = () => {
    return (
        <>
            <Helmet>
                <title>Gastos por categoría</title>
            </Helmet>
            <Header>
                <BtnReturn route="/listas"/>
                <Title>Gastos por categoría</Title>
            </Header>
            <ResultsBar/>
        </>
    )
}

export default ExpensesByCategory
