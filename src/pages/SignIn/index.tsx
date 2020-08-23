import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo_upf.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />

      <Title>Faça seu login</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />
      <Button onPress={() => {}}>Entrar</Button>
    </Container>
  );
};

export default SignIn;
