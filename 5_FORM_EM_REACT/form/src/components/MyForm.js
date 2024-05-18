import styles from './MyForm.module.css';
import {useState} from "react"

const MyForm = () => {
    // 3 - GERENCIAMENTO DE DADOS
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
  return (
    <div className={styles.div_formulario}>
        {/* 1- CRIAÇÃO DO FORM */}
        <form className={styles.formulario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName}/>
            </div>
            {/* 2 - LABEL ENVOLVENDO O INPUT */}
            <label>
                <span>E-mail</span>
                <input type="email" name='email' placeholder='Digite o e-mail' onChange={handleEmail} />
            </label>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm