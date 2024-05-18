
const UserDetails = ({users}) => {
    
  return (
    <div>
        <ul>
            {users.map((people) => (
                <li key={people.id}>Nome: {people.name} | Idade: {people.age} | Profissão: {people.job}
                {(people.age >= 18) ? <p>Pode tirar CNH</p> : <p>Não pode tirar CNH</p>}
                </li>
                
            ))}
        </ul>
    </div>
  )
}

export default UserDetails