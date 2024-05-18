// STYLES
import './App.css';
import Car from './components/Car';


function App() {
  const cars = [
    {id:1, name:'Fusca', km:'7896255', color:'Branco'},
    {id:2, name:'Onix', km:'0', color:'Preto'},
    {id:3, name:'Polo', km:'0', color:'Cinza'},
    {id:4, name:'Gol', km:'12560', color:'Vermelho'},
  ]

  
  
  
  return (
    <div className="App">
      <h1 className='title-App'>Lista de carros</h1>
      <div className="espaco_car">
        {cars.map((cars)=>(
          <Car key={cars.id} name={cars.name} km={cars.km} color={cars.color} />
        ))}
      </div>
    
    </div>
    
  );

}

export default App;
