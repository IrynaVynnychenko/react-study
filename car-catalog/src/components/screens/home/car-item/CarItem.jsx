import styles from "../Home.module.scss";

function CarItem({ car }) {
  return (
    <div key={car.id} className={styles.item}>
      <div className={styles.itemImage}>
        <img src={car.image} alt="" />
      </div>
      <div className={styles.itemInfo}>
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
          }).format(car.price)}
        </p>
        <button className='btn'>Read more</button>
      </div>
    </div>
  );
}

export default CarItem;
