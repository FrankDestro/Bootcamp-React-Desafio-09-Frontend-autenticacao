import ButtonIcon from 'Components/ButtonIcon';
import './styles.css';

const Login = () => {
  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form>
        <div className="mb-20">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-20 input-senha">
          <input
            type="password"
            className="form-control base-input"
            placeholder="Senha"
            name="password"
          />
          <div className="invalid-feedback d-block"></div>
        </div>
        <div className="login-submit">
          <ButtonIcon text="Fazer login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
