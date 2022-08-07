import { useState } from 'react';
import axios from 'axios';

const Home = () => {
	const [take, setTake] = useState();

	const clickHandler = async () => {
		const response = axios.get('/api/openai').then(response => {
			setTake(response.data);
			console.log(response);
		});
	};

	return (
		<div>
			<h1>Hoopsbot2</h1>
			<p>Generating white hot NBA takes using OpenAI</p>
			<p>Take: {take}</p>
			<button onClick={clickHandler}>Generate Take</button>
		</div>
	);
};

export default Home;
