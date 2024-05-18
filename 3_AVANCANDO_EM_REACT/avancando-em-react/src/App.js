// COMPONENTS
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
// Assests / CSS
import './App.css';
import City from './assets/city.jpg' 
import { useState } from 'react';







function App() {
  const [userName] = useState('Maria') 
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
        {/* PROPS */}
        <ShowUserName name={userName} />
        {/* destructuring */}
        <CarDetails brand='BMW' km={1500} color='Preto' />

    </div>
  );
}

export default App;
