import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import ButtonSubmit from './../../components/ButtonSubmit';

const Login: React.FC = () => (
  <Container>
    <h1>Fazer Login no Onboard</h1>
    <div className="form-control">
      <input type="email" placeholder="Insira o e-mail" />
    </div>
    <div className="form-control">
      <input type="password" placeholder="Inserir Senha" />
    </div>
    <ButtonSubmit text="Fazer login" />
    <span>Ou</span>
    <div className="forgot">
      <Link className="anchor" to="/algumacoisa">Não conseguiu entrar?</Link>
      <Link className="anchor" to="/algumacoisa">Criar uma conta</Link>
    </div>
  </Container>
);

export default Login;
