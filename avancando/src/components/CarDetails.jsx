
const CarDetails = ({brand, km, color, newCar}) => { /* ao invés de chamar o "props" aqui */
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Esse carro é novo!</p>} {/* se for true, mostra a mensagem, se não, não mostra nada */}
    </div>
  )
}

export default CarDetails