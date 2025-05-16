import { useState } from "react"

const ShowUserName = (props) => {
    const [name2, setName2] = useState("Vinícius") 
  return (
    <div>
        <h2>O nome do usuário: {props.name}</h2>

    </div>
  )
}

export default ShowUserName