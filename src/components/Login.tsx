import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import styles from './Login.module.css'

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.login}>
      <section className={styles.left_side}>
        <img src={Logo} className={styles.logo}/>
      </section>
      <section className={styles.right_side}>
        <div className={styles.container_form}>
          <p>¡Hola! 👋</p>
          <hr/>
          <form className={styles.form_login}>
            <label htmlFor="email">Correo electrónico</label>
            <input type="text" name="email" required className={styles.inputs_form}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" required className={styles.inputs_form}/>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input className={styles.checkbox} type="checkbox" name="remember" checked={isChecked} onChange={checkHandler} />
              <span style={{ marginLeft: '5px' }}>Recordarme</span>
            </label>
            <button className={styles.form_button} type="submit">Iniciar sesión</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
