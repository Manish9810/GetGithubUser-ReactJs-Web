import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
// import loginImg from '../images/login-img.svg';
import loginImg from '../images/login1.svg'
const Login = () => {

  const{loginWithRedirect} = useAuth0();
  return <Wrapper>
    <div className="container">
      <img src={loginImg} alt="" />
      <h1 style={{textShadow:"2px 2px 4px #000000"}}>Login Page</h1>
      <button className="btn" onClick={loginWithRedirect}>Login / sign up</button>
    </div>
  </Wrapper>
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(to bottom right, #3399ff 0%, #ffffff 100%);
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
