import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import City from "./assets/city.jpg" /* ASSETS IMPORTADO  */;
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const [count, setCount] = useState(0)
  const name = "Joaquim"
  const [userName] = useState("Maria")
  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color: "Amarela", newCar: true },
    { id: 2, brand: "KIA", km: 34343, color: "Branco", newCar: false },
    { id: 3, brand: "Renault", km: 234, color: "Azul", newCar: false },
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  };

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Vinicius", age: 20, profissao: "Programador" },
    { id: 2, name: "Maria Luiza", age: 17, profissao: "Garantista" },
    { id: 3, name: "Eduardo", age: 25, profissao: "Cabeleileiro" },
  ]
  



  return (

    <div>
      <h1>Avançando em React</h1>
      {/* para acessar IMAGEM EM PUBLIC */}
      <div>
        <img src="img1.jpg" alt="paisagem" />
      </div>
      {/* para acessar IMAGEM EM ASSETS */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitamento */}
      <CarDetails brand="Ford" color="Vermelha" km="0" newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km="4500" newCar={false} />
      {/* loop em arrays de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id} /* CHAVE ÚNICA PARA CADA CARRO */
          /* OBRIGATÓRIO */
          /* DESESTRUTURANDO O OBJETO CAR */
          /* CAR.ID É O ID DO CARRO */
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}


        />
      ))}
      {/* Fragment */}
      <Fragment prop Fragment="teste" />
      {/* Children */}
      <Container myValue="teste">
        <p>E aqui o conteúdo</p>
      </Container>
      <Container myValue="teste 2">
        <h5>Testando o container</h5>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* Desafio 4  user details*/}
      {users.map((user) => (
        <UserDetails 
        key={user.id}
        name={user.name}
        age={user.age}
        profissao={user.profissao}
        
        />
      )
    )}
      
    </div>

  )
}

export default App
