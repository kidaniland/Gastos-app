import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header, Title, ContainerHeader } from '../elements/Header';
import Button from '../elements/Button';
import { Form, Input, ContainerBtn } from '../elements/FormElements';
import { ReactComponent as SvgLogin } from '../images/login.svg';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { auth } from '../firebase/firebaseConfig';
import Alert from '../elements/Alert';


const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem;
    margin-bottom: 1.25rem;
`;

const SignIn = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertState, setAlertState] = useState(false)
    const [alert, setAlert] = useState({});

    const handleChange = (e) => {
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }
        else if(e.target.name === "password"){
            setPassword(e.target.value);
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
        if (email === '' || password === '') {
            setAlertState(true);
            setAlert({
                type: 'error',
                message: 'rellena todos los datos.'
            })
            return;
        }

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                console.log("--->", error);
                setAlertState(true);
                let message;
                switch (error.code) {
                    case 'auth/wrong-password':
                        message = "La contraseña no es correcta." 
                        break;
                    case 'auth/user-not-found':
                        message = "No se ha encontrado una cuenta con este correo electrónico."
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
                <title>Iniciar Sesión</title>
            </Helmet>
            <Header>
                <ContainerHeader>
                    <Title>Iniciar Sesión</Title>
                    <div>
                        <Button to="/registro">Registrarse</Button>
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
                <ContainerBtn>
                    <Button 
                        as="button" 
                        type="submit" 
                        primario>Iniciar Sesión
                    </Button>
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

export default SignIn
