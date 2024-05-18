// COMPONENTS
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
// Assests / CSS
import './App.css';
import City from './assets/city.jpg' 
import { useState } from 'react';



function App() {
  const [userName] = useState('Maria') 

  const cars = [
    {id: 1, brand:'BMW', km:0, color:'Preto',newCar: true},
    {id: 2, brand:'VW', km:0, color:'Vermelho',newCar: true},
    {id: 3, brand:'BMW', km:235600, color:'Preto',newCar: false},
    {id: 4, brand:'Honda', km:0, color:'Cinza',newCar: true},
  ]
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
        <CarDetails brand='BMW' km={1500} color='Preto' newCar={false}/>
        {/* REAPROVEITAMENTO */}
        <CarDetails brand='VW' km={0} color='Branco' newCar={true}/>
        <CarDetails brand='Honda' km={0} color='Vermelho' newCar={true}/>
        <CarDetails brand='VW' km={20000} color='Preto' newCar={false}/>

        <h1>Loop de renderização</h1>
        {cars.map((carros) => (
          <CarDetails 
          brand={carros.brand} km={carros.km} color={carros.color} newCar={carros.newCar}
          />
        ))}
        {/* FRAGMENT */}
        <Fragment propFragment='Teste'/>
    </div>
  );
}

export default App;
