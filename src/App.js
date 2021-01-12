import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
	return (
		<div className="App">
			<h1>App</h1>
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
