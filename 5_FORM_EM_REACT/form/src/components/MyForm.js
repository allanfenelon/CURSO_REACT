import styles from './MyForm.module.css';

const MyForm = () => {
  return (
    <div className={styles.div_formulario}>
        {/* 1- CRIAÇÃO DO FORM */}
        <form className={styles.formulario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome'/>
            </div>
            {/* 2 - LABEL ENVOLVENDO O INPUT */}
            <label>
                <span>E-mail</span>
                <input type="email" name='email' placeholder='Digite o e-mail'/>
            </label>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm