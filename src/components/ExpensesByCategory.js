import React from 'react';
import { Header, Title } from '../elements/Header';
import { Helmet } from 'react-helmet';
import BtnReturn from '../elements/BtnReturn';
import ResultsBar from './ResultsBar';
import useGetExpensesMonthByCategory from '../hooks/useGetExpensesMonthByCategory';
import { CategoriesList, ElementCategoriesList, Category, Value } from '../elements/ListElements';
import IconCategory from '../elements/IconCategory';
import convertToCurrency from '../helpers/convertToCurrency';

const ExpensesByCategory = () => {
    const expenesesByCategory = useGetExpensesMonthByCategory();
    //console.log("...>", expeneses)
    return (
        <>
            <Helmet>
                <title>Gastos por categoría</title>
            </Helmet>
            <Header>
                <BtnReturn route="/listas" />
                <Title>Gastos por categoría</Title>
            </Header>
            <CategoriesList>
                {expenesesByCategory.map((element, index) => {
                    return (
                        <ElementCategoriesList key={index}>
                            <Category>
                                <IconCategory id={element.categoria} />
                                {element.categoria}
                            </Category>
                            <Value>
                                {convertToCurrency(element.valor)}
                            </Value>
                        </ElementCategoriesList>
                    )
                })}
            </CategoriesList>
            <ResultsBar />
        </>
    )
}

export default ExpensesByCategory
