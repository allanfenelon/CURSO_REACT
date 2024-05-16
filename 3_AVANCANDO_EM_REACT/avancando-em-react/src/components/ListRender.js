import {useState} from 'react'
const ListRender = () => {

  const [list] = useState(['Mateus','Carlos','Joaquim'])

  const [users] = useState([
    {id: 1, name: 'Allan', age: 23, job: 'Programador'},
    {id: 2, name: 'Francilene', age: 24, job: 'Engenheira de Materiais'},
    {id: 3, name: 'Dom Calvacante', age: 82, job: 'Engenheiro Arero Espacial'},
    {id: 4, name: 'Luquinhas da Pop 100', age: 21, job: 'Mecanico'},
    {id: 5, name: 'Lindalva', age: 145, job: 'Múmia'}
  ])

  return (
    <div>
      <ul>
        {list.map((item,i) => (
        <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) =>(
          <li key={user.id}>Nome: {user.name} - Idade: {user.age} - Profissão: {user.job}</li>
        ))}
      </ul>
    </div>
    
    
  )
}

export default ListRender