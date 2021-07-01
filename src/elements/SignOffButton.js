import React from 'react';
import { ReactComponent as SignOffIcon } from '../images/log-out.svg';
import Button from './Button';
import { auth } from '../firebase/firebaseConfig';
import { useHistory } from 'react-router';

const SignOffButton = () => {
    const history = useHistory();
    
    const logout = async () => {
        try {
            await auth.signOut();
            history.push('/iniciar-sesion');
        } catch (error) {
           console.log(error) 
        }  
    }

    return (
        <Button bigIcon as="button" onClick={logout}>
            <SignOffIcon/>
        </Button>
    )
}

export default SignOffButton
