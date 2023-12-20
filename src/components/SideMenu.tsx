import Logo from '../assets/ShortLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faPlus,
  faKitchenSet,
  faBellConcierge,
  faSquareCheck,
  faCircleUser,
  faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import styles from './SideMenu.module.css';
import { useNavigate } from 'react-router-dom';

export const SideMenu = () => {
  const navigate = useNavigate();

  const handleClickLogOut = () => {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.buttonsBar}>
        <div className={styles.logoSide}>
          <img src={Logo} alt="burger-queen-short-logo" />
          <FontAwesomeIcon
            className={styles.iconSidebar}
            icon={faBars}
            size="xl"
            style={{ color: '#f5fbf1', cursor: 'pointer', padding: '8px' }}
          />
        </div>
        <section className={styles.sideSection}>
          <FontAwesomeIcon icon={faPlus} size="xl" style={{ color: '#f5fbf1' }} />
          <p>Nueva Orden</p>
        </section>
        <section className={styles.sideSection}>
          <FontAwesomeIcon icon={faKitchenSet} size="xl" style={{ color: '#f5fbf1' }} />
          <p>En la cocina</p>
        </section>
        <section className={styles.sideSection}>
          <FontAwesomeIcon icon={faBellConcierge} size="xl" style={{ color: '#f5fbf1' }} />
          <p>Por servir</p>
        </section>
        <section className={styles.sideSection}>
          <FontAwesomeIcon icon={faSquareCheck} size="xl" style={{ color: '#f5fbf1' }} />
          <p>Completado</p>
        </section>
      </div>
      <section className={styles.sideSection} id={styles.userSection}>
        <FontAwesomeIcon icon={faCircleUser} size="xl" style={{ color: '#f5fbf1' }} />
        <p>Mesero 1</p>
      </section>
      <button type="button" className={styles.logOutButton} onClick={handleClickLogOut}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" style={{ color: '#161E11' }} />
        Cerrar Sesión
      </button>
    </aside>
  );
};
