

const Container = ({children,myValue}) => {
  return (
    <div>
        <h1>Esse é o título do Container</h1>
        {children}
        <p>{myValue}</p>
    </div>
  )
}

export default Container