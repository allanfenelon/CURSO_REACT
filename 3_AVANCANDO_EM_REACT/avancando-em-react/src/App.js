// COMPONENTS
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';
// Assests / CSS
import './App.css';
import City from './assets/city.jpg' 
import { useState } from 'react';







function App() {
  const [userName] = useState('Maria') 
  function showMessage(){
    console.log('Evento do componente pai')
  }
  const cars = [
    {id: 1, brand:'BMW', km:0, color:'Preto',newCar: true},
    {id: 2, brand:'VW', km:0, color:'Vermelho',newCar: true},
    {id: 3, brand:'BMW', km:235600, color:'Preto',newCar: false},
    {id: 4, brand:'Honda', km:0, color:'Cinza',newCar: true},
  ]

  const Pessoas = [
    {id: 1, name: 'Allan', age:23,job:'Estudante'},
    {id: 2, name: 'Francilene', age:24,job:'Estudante'},
    {id: 3, name: 'Pedrinho', age:15,job:'Estudante'},
    {id: 4, name: 'Lucas', age:13,job:'Estudante'},
  ]

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }
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
          <CarDetails key={carros.id}
          brand={carros.brand} km={carros.km} color={carros.color} newCar={carros.newCar}
          />
        ))}
        {/* FRAGMENT */}
        <Fragment propFragment='Teste'/>

        {/* PROP CHILD  */}
        <Container myValue='Opa rapaz'>
          <p>E esse é o conteúdo</p>
        </Container>

        {/* EXECUTAR FUNÇÃO  */}
        <ExecuteFunction myFuction={showMessage}/>

        {/* STATE LIFT  */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
        <UserDetails users={Pessoas}/>
    </div>
  );
}

export default App;
