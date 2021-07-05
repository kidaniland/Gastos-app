import React from 'react'
import { Helmet } from 'react-helmet';
import { Header, Title, ContainerHeader, ContainerButtons } from './elements/Header';
import Button from './elements/Button';
import SignOffButton from './elements/SignOffButton';
import ExpensesForm from './components/ExpensesForm';
import ResultsBar from './components/ResultsBar';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Agregar Gasto</Title>
          <ContainerButtons>
            <Button to="/categorias">Categorías</Button>
            <Button to="/listas">Lista de gastos</Button>
            <SignOffButton /> 
          </ContainerButtons>
        </ContainerHeader>
      </Header>
      <ExpensesForm/>
      <ResultsBar/>
    </>
  )
}

export default App;


