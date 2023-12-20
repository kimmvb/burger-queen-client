import { useEffect, useState } from 'react';
import Logo from '../assets/Logo.svg';
import styles from './Login.module.css';
import { postLoginData } from './api/Postdata';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorCredentials, setErrorCredentials] = useState<boolean>(false);

  useEffect(() => {
    const emailSaved = localStorage.getItem('email');
    const passwordSaved = localStorage.getItem('password');

    if (emailSaved && passwordSaved) {
      setEmail(emailSaved);
      setPassword(passwordSaved);
      setIsChecked(true);
    }
  }, []);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await postLoginData(email, password);

      localStorage.setItem('accessToken', response.accessToken);
      if (isChecked) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      }

      navigate('/');
    } catch (error) {
      setErrorCredentials(true);
      setEmail('');
      setPassword('');
      console.error('Error en el inicio de sesión:', error);
    }
  };

  return (
    <div className={styles.login}>
      <section className={styles.left_side}>
        <img src={Logo} className={styles.logo} alt="burger-queen-logo" />
      </section>
      <section className={styles.right_side}>
        <div className={styles.container_form}>
          <p>¡Hola! 👋</p>
          <hr />
          {errorCredentials && (
            <p style={{ color: 'red', fontSize: 'large' }}>Credenciales incorrectas</p>
          )}
          <form className={styles.form_login} onSubmit={handleFormSubmit}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              className={styles.inputs_form}
              onChange={handleEmailChange}
              autoComplete="on"
            />
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              className={styles.inputs_form}
              onChange={handlePasswordChange}
            />
            {
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="remember"
                  checked={isChecked}
                  onChange={checkHandler}
                />
                <span style={{ marginLeft: '5px' }}>Recordarme</span>
              </label>
            }
            <button className={styles.form_button} type="submit">
              Iniciar sesión
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
