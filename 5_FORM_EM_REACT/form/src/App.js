
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name:'Allan', email:'allan@gmail.com', bio:'Tenho 23 anos e gosto de programação!', role:'admin'}}/>
    </div>
  );
}

export default App;
