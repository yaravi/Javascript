import './App.css';
import { UserProvider } from './Context/userContext';
import Routes from './Routes';


function App() {
	return (
		<UserProvider>
			<div className="App">
				<Routes />
			</div>
		</UserProvider>
	);
}

export default App;