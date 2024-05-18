import styles from './Car.module.css';

const Car = ({key, name, km, color}) => {
  return (
    <div className={styles.card}>
        <h1>Nome: {name}</h1>
        <p>KM: {km} | Cor: {color}</p>
    </div>
  )
}

export default Car