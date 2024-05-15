import { useState } from "react"

const ManageData = () => {
  let someData = 10

  const [number, setNumber] = useState(15)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onCLick={() => {someData = 15}}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number+1)}>Somar mais 1 no valor de number</button>
      </div>
    </div>
  )
}

export default ManageData