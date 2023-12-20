import NewOrderBill from './NewOrderBill';
import styles from './NewOrderFood.module.css';

const NewOrderFood = () => {
  return (
    <main className={styles.newOrder}>
      <section className={styles.client}>
        <label>Nombre del cliente:</label>
        <input type="text"></input>
      </section>
      <section className={styles.foodButtons}>
        <div className={styles.buttonsMeals}>
          <button>Desayuno</button>
          <button>Almuerzo y cena</button>
        </div>
        <div className={styles.buttonsBreakfast}>
          <button>
            Café americano <br />
            <b>$5</b>
          </button>
          <button>
            Café con leche <br />
            <b>$7</b>
          </button>
          <button>
            Sandwich de jamón y queso <br />
            <b>$7</b>
          </button>
          <button>
            Jugo de frutas natural <br />
            <b>$7</b>
          </button>
        </div>
        <div className={styles.buttonsLunch}>
          <button>
            Hamburguesa simple <br />
            <b>$7</b>
          </button>
          <button>
            Hamburguesa doble <br />
            <b>$15</b>
          </button>
          <button>
            Papas fritas <br />
            <b>$5</b>
          </button>
          <button>
            Aros de cebolla <br />
            <b>$5</b>
          </button>
          <button>
            Agua 500ml <br />
            <b>$5</b>
          </button>
          <button>
            Agua 750ml <br />
            <b>$7</b>
          </button>
          <button>
            Bebida/gaseosa 500ml <br />
            <b>$7</b>
          </button>
          <button>
            Bebida/gaseosa 750ml <br />
            <b>$10</b>
          </button>
        </div>
      </section>
      <NewOrderBill />
    </main>
  );
};

export default NewOrderFood;
