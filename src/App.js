import GlobalStyles from './components/GlobalStyles';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
	const [ inputText, setInputText ] = useState('');
	const [ selectText, setSelectText ] = useState('');
	const [ isMicOn, setIsMicOn ] = useState(false);

	return (
		<div>
			<GlobalStyles />
			<Home
				inputText={inputText}
				setInputText={setInputText}
				selectText={selectText}
				setSelectText={setSelectText}
				isMicOn={isMicOn}
				setIsMicOn={setIsMicOn}
			/>
		</div>
	);
}

export default App;
