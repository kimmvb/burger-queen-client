import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import styles from './NewOrderBill.module.css';

const NewOrderBill = () => {
  return (
    <section className={styles.billContainer}>
      <div className={styles.item}>
        <p style={{ justifySelf: 'flex-start' }}>Item</p>
        <div className={styles.counterItem}>
          <button className={styles.plusMinus}>-</button>
          <input type="number" className={styles.num} value="0" />
          <button className={styles.plusMinus}>+</button>
        </div>
        <p style={{ justifySelf: 'flex-start' }}>$?</p>
        <FontAwesomeIcon
          icon={faTrashCan}
          size="xl"
          style={{ color: '#000000', justifySelf: 'flex-end' }}
        />
      </div>
      <div className={styles.totalBill}>
        <button>Send</button>
        <p>Total: ?</p>
      </div>
    </section>
  );
};
export default NewOrderBill;
