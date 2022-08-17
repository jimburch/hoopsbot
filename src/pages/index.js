import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
	const [takeId, setTakeId] = useState();
	const [take, setTake] = useState();

	useEffect(() => {
		generateTake();
	}, []);

	const generateTake = async () => {
		const lottery = Math.floor(Math.random() * 5);

		if (lottery === 1) {
			const response = await axios.get('/api/openai').then(response => {
				setTakeId(null);
				setTake(response.data);
			});
		} else {
			const response = await axios.get('/api/takes').then(response => {
				setTakeId(response.data.id);
				setTake(response.data.take);
			});
		}
	};

	const saveTake = async heat => {
		await axios.post('/api/takes', {
			data: {
				take: take,
				hot: heat ? 1 : null,
				cold: !heat ? 1 : null,
			},
		});
	};

	return (
		<div>
			<h1>Hoopsbot2</h1>
			<p>Generating white hot NBA takes using OpenAI</p>
			<p>Take: {take}</p>
			{!takeId && take ? (
				<p>This is a certified fresh take from OpenAI</p>
			) : null}
			<button onClick={generateTake}>Generate Take</button>
			<button onClick={() => saveTake(true)}>Oh, That&apos;s Hot</button>
			<button onClick={() => saveTake(false)}>That&apos;s Garbage</button>
		</div>
	);
};

export default Home;
