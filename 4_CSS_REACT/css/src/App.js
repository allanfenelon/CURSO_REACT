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
    </div>
  );
}

export default App;
