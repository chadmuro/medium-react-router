import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
	const params = useParams();

	return <div>{`BlogPost ${params.id}`}</div>;
};

export default BlogPost;
