// COMPONENTS
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
// Assests / CSS
import './App.css';
import City from './assets/city.jpg' 





function App() {
  return (
    <div className="App">
      <div>
        {/* QUANDO A IMAGEM ESTÁ EM PUBLIC PODEMOS CHAMA-LA ASSIM */ }
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        {/* QUANDO A IMAGEM ESTÁ NO SRC PODEMOS CHAMA-LA ASSIM E DEVEMOS IMPORTA-LA*/ }
        <img src={City} alt="Cidade"/>
        </div>

        <ManageData />
        <ListRender />
        <ConditionalRender />
    </div>
  );
}

export default App;
