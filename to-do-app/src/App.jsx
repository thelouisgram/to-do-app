import React, { useState } from 'react';
import Header from './components/header';
import colors from './style';
import Todos from './components/Todos';
import Form from './components/Form';

const App = () => {
	const [ mode, setMode ] = useState('dark');
	const currentMode = colors[mode];
	const [ items, setItems ] = useState([]);
	

	function toggleMode() {
		setMode(mode === 'light' ? 'dark' : 'light');
	}

	return (
		<section
			id="section"
			className={`flex flex-col items-center px-6 file:md:px-16
      		${mode === 'light' ? 'light' : 'dark'} ${currentMode.body}`}
		>
			<Header mode={mode} toggleMode={toggleMode} />
      		<Form currentMode={currentMode} items={items} setItems={setItems} />
			<Todos mode={mode} currentMode={currentMode} items={items} setItems={setItems}/>
		</section>
	);
};

export default App;
