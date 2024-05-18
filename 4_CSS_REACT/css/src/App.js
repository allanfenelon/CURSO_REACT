import './App.css';
// COMPONENTS
import MyComponent from './components/MyComponent';

function App() {
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
    </div>
  );
}

export default App;
