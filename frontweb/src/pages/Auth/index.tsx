import { Route, Switch } from 'react-router-dom';
import { ReactComponent as AuthImage } from 'assets/img/auth-image.svg';

import './styles.css';
import Login from './Login';


const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
