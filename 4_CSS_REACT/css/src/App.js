// STYLES
import './App.css';
// HOOKS
import { useState } from 'react';
// COMPONENTS
import MyComponent from './components/MyComponent';


function App() {
  const [valor, setValor] = useState(true)
  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS COMPONENT */}
      <MyComponent />
      <p>Esse paragráfo é do App.js</p>
      {/* INLINE CSS*/}
      <p style={{color:'blue', padding: '25px', borderTop: '2px solid red'}}>
        Este elemento foi estilizado em modo inline
      </p>
      {/* CSS INLINE DINÂMICO*/}
      <h2 style={valor ? ({color:'red'}):({color:'blue'})}>CSS DINÂMICO</h2>
      <button onClick={()=> setValor(false)}>Falso</button>
      <button onClick={()=> setValor(true)}>Verdadeiro</button>
    </div>
  );
}

export default App;
