import { Route, Switch, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';

export default function App() {
	return (
		<div className="App">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
			</ul>
			<Switch>
				<Route path="/blog/:id" component={BlogPost} />
				<Route path="/blog" component={Blog} />
				<Route path="/" exact component={Home} />
			</Switch>
		</div>
	);
}
