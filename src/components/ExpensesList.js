//import { useContext } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Title } from '../elements/Header';
import BtnReturn from '../elements/BtnReturn';
//import { useAuth } from '../context/authContext';
import ResultsBar from './ResultsBar';
import useGetExpenses from '../hooks/useGetExpenses';
import IconCategory from '../elements/IconCategory';
import formatquantity from '../helpers/convertToCurrency';
import { ReactComponent as IconEdit } from '../images/editar.svg'
import { ReactComponent as IconDelete } from '../images/borrar.svg'
import { Link } from 'react-router-dom';
import Button from '../elements/Button';
import {
    List,
    ElementList,
    CategoriesList,
    ElementCategoriesList,
    Category,
    Description,
    Value,
    Date,
    ButtonsContainer,
    ButtonAction,
    ButtonAddMore,
    ContainerCentralButton,
    SubtitleContainer,
    Subtitle
} from '../elements/ListElements'



const ExpensesList = () => {
    //const context = useContext(AuthContext) <-- vendrá desde un hook
    const [expenses] = useGetExpenses();
    console.log("--->", expenses);
    return (
        <>
            <Helmet>
                <title>Lista de gastos</title>
            </Helmet>
            <Header>
                <BtnReturn route="/" />
                <Title>Lista de gastos</Title>
            </Header>
            <List>
                {expenses.map((expense) => {
                    return (
                        <ElementList key={expense.id}>
                            <Category>
                                <IconCategory id={expense.categoria} />
                                {expense.categoria}
                            </Category>
                            <Description>
                                {expense.descripcion}
                            </Description>
                            <Value>
                                {formatquantity(expense.valor)}
                            </Value>
                            <ButtonsContainer>
                                <ButtonAction as={Link} to={`/editar/${expense.id}`}>
                                    <IconEdit />
                                </ButtonAction>
                                <ButtonAction>
                                    <IconDelete />
                                </ButtonAction>
                            </ButtonsContainer>
                        </ElementList>
                    );
                })}
                <ContainerCentralButton>
                    <ButtonAddMore>Cargar más</ButtonAddMore>
                </ContainerCentralButton>
                {expenses.length === 0 &&
                    <SubtitleContainer>
                        <Subtitle>No hay más gastos por mostrar</Subtitle>
                        <Button as={Link} to={"/"}/>
                    </SubtitleContainer> 
                }
            </List>
            <ResultsBar />
        </>
    )
}

export default ExpensesList


//