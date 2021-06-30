import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header, Title, ContainerHeader } from '../elements/Header';
import Button from '../elements/Button';
import { Form, Input, ContainerBtn } from '../elements/FormElements';
import { ReactComponent as SvgLogin } from '../images/registro.svg';
import styled from 'styled-components';
import { auth } from '../firebase/firebaseConfig';
import { useHistory } from 'react-router';
import Alert from '../elements/Alert';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem;
    margin-bottom: 1.25rem;
`;

const RegisterUser = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [alertState, setAlertState] = useState(false)
    const [alert, setAlert] = useState({});

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'password2':
                setPassword2(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAlertState(false);
        setAlert({});

        const RegularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        if (!RegularExpression.test(email)) {
            setAlertState(true);
            setAlert({
                type: 'error',
                message: 'Por favor ingresa un correo electrónico válido.'
            })
            return;
        }
        if (email === '' || password === '' || password2 === '') {
            setAlertState(true);
            setAlert({
                type: 'error',
                message: 'rellena todos los datos.'
            })
            return;
        }
        if (password !== password2) {
            setAlertState(true);
            setAlert({
                type: 'error',
                message: 'las contraseñas deben ser iguales.'
            })
            return;
        }


        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                setAlertState(true);
                let message;
                switch (error.code) {
                    case 'auth/invalid-password':
                        message = "La contraseña debe tener al menos 6 carácteres."
                        break;
                    case 'auth/email-already-in-use':
                        message = "Ya existe una cuenta con el correo electrónico proporcionado."
                        break;
                    case 'auth/invalid-email':
                        message = "El correo electrónico no es válido."
                        break;   
                    default:
                        message = "Hubo un error al intentar crear la cuenta."
                        break;
                }
                setAlert({
                    type: 'error',
                    message: message
                })
            });
    }

    return (
        <>
            <Helmet>
                <title>Crear cuentas</title>
            </Helmet>
            <Header>
                <ContainerHeader>
                    <Title>Crear cuenta</Title>
                    <div>
                        <Button to="/iniciar-sesion">Iniciar Seseión</Button>
                    </div>
                </ContainerHeader>
            </Header>
            <Form onSubmit={handleSubmit}>
                <Svg />
                <Input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChange}

                />
                <Input
                    type="password"
                    name="password2"
                    placeholder="Repetir Contraseña"
                    value={password2}
                    onChange={handleChange}
                />
                <ContainerBtn>
                    <Button as="button" type="submit" primario>Crear Cuenta</Button>
                </ContainerBtn>
            </Form>
            <Alert 
                MsgType={alert.type}
                message={alert.message}
                alertState={alertState}
                changeAlertState={setAlertState}
            />
        </>
    )
}

export default RegisterUser
