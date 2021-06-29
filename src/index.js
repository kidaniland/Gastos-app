import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Container from '../src/elements/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SingIn from './components/SingIn';
import EditExpenses from './components/EditExpenses';
import ExpensesByCategory from './components/ExpensesByCategory';
import ExpensesList from './components/ExpensesList';
import RegisterUser from './components/RegisterUser';
import { Helmet } from 'react-helmet';
import favicon from './images/logo.png';
import Background from '../src/elements/Background';

WebFont.load({
  google: {
    //Work+Sans:wght@400;500;700
    families: ['Work Sans: 400, 500, 700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      </Helmet>

      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path="/iniciar-sesion" component={SingIn}/>
            <Route exact path="/registro" component={RegisterUser}/>
            <Route exact path="/categorias" component={ExpensesByCategory}/>
            <Route exact path="/listas" component={ExpensesList}/>
            <Route exact path="/editar/:id" component={EditExpenses}/>
            <Route exact path="/" component={App}/>
          </Switch>
        </Container>

        <Background/>
      </BrowserRouter>
    </>
  )
}
ReactDOM.render(<Index />, document.getElementById('root'));
