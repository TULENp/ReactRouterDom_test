import React from 'react'
import data from './data';
import Card from './components/Card';
import { RouteItems } from "./Routing/index";
import './App.css';

export function Test() {
	const cards = data.map((card, i) => {
		return (
			<Card
				key={card.id}
				id={i}
				{...card} />
		)
	});
	return (
		<section className='cardsList'>
			{cards}
		</section>
	)
}

export default function App() {
	return (
		<div className="App">
			<RouteItems />
		</div>
	)
}

