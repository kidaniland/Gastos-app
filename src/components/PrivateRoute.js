import React from 'react';
import { useAuth } from '../context/authContext';
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ children, ...allProperties }) => {
        const { user } = useAuth(); //valor del usuario
        if (user) {
            return <Route {...allProperties}>{children}</Route>
        } else {
            return <Redirect to="/iniciar-sesion"/>
        }
}

export default PrivateRoute
