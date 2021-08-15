import React from 'react';
import {
	useHistory,
	useLocation,
	useParams,
	useRouteMatch,
} from 'react-router';

const Blog = () => {
	const history = useHistory();
	const location = useLocation();
	const params = useParams();
	const routeMatch = useRouteMatch();
	console.log(history);
	console.log(location);
	console.log(params);
	console.log(routeMatch);

	return (
		<div>
			<div>Blogs</div>
			<div>
				<button onClick={() => history.push(`${location.pathname}/1`)}>
					Post 1
				</button>
			</div>
			<div>
				<button onClick={() => history.push(`${location.pathname}/2`)}>
					Post 2
				</button>
			</div>
		</div>
	);
};

export default Blog;
