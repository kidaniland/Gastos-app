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
import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';
import deleteExpense from '../firebase/deleteExpense';
import {
    List,
    ElementList,
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
    //const context = useContext(AuthContext) <-- ahora vendrá desde un hook
    const [expenses, getMoreExpenses, moreExpensesToLoad] = useGetExpenses();
    //console.log("--->", expenses);

    const dateFormat = (date) => {
        return format(fromUnixTime(date), "dd 'de' MMMM 'de' yyyy", { locale: es })
    }

    const dateIsEqual = (expenses, index, expense) => {
        if (index !== 0) {
            const currentDate = dateFormat(expense.fecha);
            const previousDate = dateFormat(expenses[index - 1].fecha);
            if (currentDate === previousDate) {
                return true
            } else {
                return false
            }
        }

    }

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
                {expenses.map((expense, index) => {
                    return (
                        <div key={expense.id}>
                            { //si la fecha no es igual mostramos el componente
                                !dateIsEqual(expenses, index, expense) &&
                                <Date>{dateFormat(expense.fecha)}</Date>
                            }
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
                                        <IconDelete onClick={() => deleteExpense(expense.id)}/>
                                    </ButtonAction>
                                </ButtonsContainer>
                            </ElementList>
                        </div>

                    );
                })}
                {moreExpensesToLoad &&
                    <ContainerCentralButton>
                        <ButtonAddMore onClick={() => getMoreExpenses()}>
                            Cargar más
                        </ButtonAddMore>
                    </ContainerCentralButton>
                }
                {expenses.length === 0 &&
                    <SubtitleContainer>
                        <Subtitle>No hay más gastos por mostrar</Subtitle>
                        <Button as={Link} to={"/"} />
                    </SubtitleContainer>
                }
            </List>
            <ResultsBar />
        </>
    )
}

export default ExpensesList


//