import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Title, ContainerHeader } from '../elements/Header';
import Button from '../elements/Button';
import {
    Form,
    Input,
    ContainerBtn
} from '../elements/FormElements';
import { ReactComponent as SvgLogin } from '../images/login.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem;
    margin-bottom: 1.25rem;
`;

const SingIn = () => {
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
            <Form >
                <Svg />
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
                <ContainerBtn>
                    <Button as="button" type="submit" primario>Iniciar Sesión</Button>
                </ContainerBtn>
            </Form>
        </>
    )
}

export default SingIn
