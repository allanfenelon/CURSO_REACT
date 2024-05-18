import { useState } from "react"


const ConditionalRender = () => {
const [x] = useState(true)

const [name, setName] = useState('Allan')

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {name === 'Allan' ? ('O nome é Allan') : ('O nome não é Allan')}
        <button onClick={() => setName('Pedro')}>Clica aqui</button>
    </div>
  )
}

export default ConditionalRender