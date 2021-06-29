import React from 'react'
import { Helmet } from 'react-helmet';
import {
  Header,
  Title,
  ContainerHeader,
  ContainerButtons
} from './elements/Header';
import Button from './elements/Button';

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
            <Button>X</Button>
          </ContainerButtons>
        </ContainerHeader>
      </Header>
    </>
  )
}

export default App;


