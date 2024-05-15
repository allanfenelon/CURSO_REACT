// Components
import FristComponent from './components/FristComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

// Styles/ CSS
import './App.css';





function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FristComponent />
      <TemplateExpressions />
      <MyComponent />
      <p>Evento:</p>
      <Events />
    </div>
  );
}

export default App;
