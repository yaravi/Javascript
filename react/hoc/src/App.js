import './App.css';
import User from './User';
import WithUser from './WithUser';

function App() {

  const CurrentUser = WithUser (User);

  return (
    <div className="App">
      <CurrentUser userId={1}/>
      <CurrentUser userId={2}/>
      <CurrentUser userId={3}/>
    </div>
  );
}

export default App;
