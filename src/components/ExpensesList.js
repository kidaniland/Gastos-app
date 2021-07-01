//import { useContext } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Title } from '../elements/Header';
import BtnReturn from '../elements/BtnReturn';
//import { useAuth } from '../context/authContext';


const ExpensesList = () => {
    //const context = useContext(AuthContext) <-- vendrá desde un hook
    return (
        <>
            <Helmet>
                <title>Lista de gastos</title>
            </Helmet>
            <Header>
                <BtnReturn route="/" />
                <Title>Lista de gastos</Title>
            </Header>
        </>
    )
}

export default ExpensesList
