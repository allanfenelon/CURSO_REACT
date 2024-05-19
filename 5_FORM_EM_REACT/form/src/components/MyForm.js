import styles from './MyForm.module.css';
import {useState} from "react"

const MyForm = ({user}) => {
    // 6 - controlled inputs
    // 3 - GERENCIAMENTO DE DADOS
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')

    const handleName = (e) => {
        setName(e.target.value)
    }
    //console.log(name)
    //console.log(email)

    const handleSubmit = (event) => {
        
        event.preventDefault(); // não faz o formulario recarregar a página
        console.log('Enviando dados...')
        console.log(name,email)

        // validação, envio e etc
        // 7 - Limpando formulários após envio
        setName('')
        setEmail('')
        setBio('')
    }
  return (
    <div className={styles.div_formulario} onSubmit={handleSubmit}>
        {/* 5 - ENVIO DE FORM*/}
        {/* 1- CRIAÇÃO DO FORM */}
        <form className={styles.formulario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} value={name}/>
            </div>
            {/* 2 - LABEL ENVOLVENDO O INPUT */}
            <label>
                <span>E-mail</span>
                {/* 4- SIMPLIFICAÇÃO DE MANIPUTALÃO DE STATE */}
                <input type="email" name='email' placeholder='Digite o e-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* TEXTAREA */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição pessoal' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm