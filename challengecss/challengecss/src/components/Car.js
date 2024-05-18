import styles from './Car.module.css';

const Car = ({key, name, km, color, removeCar}) => {
  return (
    <div className={styles.card}>
        <h1>{name}</h1>
        <p>KM: {km} | Cor: {color}</p>
        {km == 0 ? <p className={styles.car_new}>O carro é novo!</p> : <p className={styles.car_used}>O carro é usado!</p>}
    </div>
  )
}

export default Car