import React, { useState, useEffect } from "react";
import "./App.css";
import Template from "./components/Template";
import Meme from "./components/Meme";
function App() {
	const [templates, setTemplates] = useState([]);
	const [meme, setMeme] = useState(null);

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((response) => response.json())
			.then((data) => {
				setTemplates(data.data.memes);
			});
	}, []);
	return (
		<div className="App">
			<h1>Meme Generator</h1>
			{meme === null ? (
				<Template templates={templates} key={templates.id} setMeme={setMeme} />
			) : (
				<Meme meme={meme} />
			)}
		</div>
	);
}

export default App;
