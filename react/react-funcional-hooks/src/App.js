import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import HomeLista from './Components/HomeLista';

function App() {
  return (
    <div className="App">
      <Counter apellido="Cruz" edad={22}/>
      <HomeLista />
    </div>
  );
}

export default App;
