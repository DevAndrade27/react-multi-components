import React from 'react'
import {useState} from "react";

function ManageData() {
  let someData = 10;
  const [number, setNumber] = useState(15); /* Declarar duas variáveis, uma com nosso nome, e a outra com set e esse nome, importamos o useState que serve para reenderização de variáveis na tela */
  console.log("someData:", someData);  // Verifica se o estado foi atualizado
  console.log("number:", number);      // Verifica se o estado foi atualizado
  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15) }>Mudar variável</button>
      <div>
        <p>Valor de number: {number}</p>
        <button onClick={() => {
          console.log("Mudar 'number' para 25");
          setNumber(25);  // Atualiza 'number'
        }}>Mudar number</button>
      </div>
    </div>
  )
}

export default ManageData