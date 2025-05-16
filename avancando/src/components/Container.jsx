

const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Título do Container</h2>
        {children}
        O valor é: {myValue}
    </div>
  )
}

export default Container