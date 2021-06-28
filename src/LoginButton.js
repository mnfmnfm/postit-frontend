
// this code came from the Auth0 documentation, https://auth0.com/docs/quickstart/spa/react?download=true
// also, this code came from our 301 course repo, https://github.com/codefellows/seattle-code-301d75/blob/main/class-11/inclass-demo/login-is-fun/src/LoginButton.js


import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;
