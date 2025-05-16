
const UserDetails = ({name, age, profissao}) => {
  return (
    <div>
        <h2>Lista de Usuários</h2>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        {age >= 18 ? <p>Pode tirar a habilitação</p> : <p>Não pode tirar a habilitação</p>}
    </div>
  )
}

export default UserDetails;