import { Route, Switch, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
	return (
		<div className="App">
			<h1>App</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
