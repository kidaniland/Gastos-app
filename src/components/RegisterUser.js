import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Title, ContainerButtons, ContainerHeader } from '../elements/Header';
import Button from '../elements/Button';
import { 
    Form, 
    Input, 
    ContainerBtn } from '../elements/FormElements';
import { ReactComponent as SvgLogin } from '../images/registro.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem;
    margin-bottom: 1.25rem;
`; 

const RegisterUser = () => {
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
            <Form >
                <Svg/>
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Correo Electrónico"
                />
                <Input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña"
                />
                <Input 
                    type="password" 
                    name="password2" 
                    placeholder="Repetir Contraseña"
                />
                <ContainerBtn>
                    <Button as="button" type="submit" primario>Crear Cuenta</Button>
                </ContainerBtn>
            </Form>
        </>
    )
}

export default RegisterUser
