import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fetchSearch } from '../actions/topHeadlineAction';
import { useDispatch } from 'react-redux';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Listening = ({ setIsMicOn, isMicOn, setInputText, InputText }) => {
	const { transcript, finalTranscript, resetTranscript } = useSpeechRecognition();
	const dispatch = useDispatch();

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const closeHandler = () => {
		setIsMicOn(!isMicOn);
		SpeechRecognition.stopListening();
	};

	const micData = () => {
		if (finalTranscript) {
			setTimeout(() => {
				dispatch({ type: 'CLEAR_SELECT' });
				dispatch(fetchSearch(finalTranscript));
				setIsMicOn(false);
				setInputText(transcript);
				scrollTop();
				readOutLoud('Here are the results');
			}, 1000);
			SpeechRecognition.stopListening();
		}
	};

	useEffect(micData, [ finalTranscript ]);

	/* const handleClick = (e) => {
		console.log(e.target);
		if (closeBlack.contains(e.target)) {
			setIsMicOn(false);
		}
	}; */

	useEffect(() => {
		document.addEventListener('click', (e) => {
			const black = document.querySelector('.black');
			if (e.target === black) {
				setIsMicOn(false);
				SpeechRecognition.stopListening();
			}
		});
	}, []);

	const readOutLoud = (message) => {
		const speech = new SpeechSynthesisUtterance();
		speech.text = message;
		speech.volume = 1;
		speech.rate = 1;
		speech.pitch = 1;
		window.speechSynthesis.speak(speech);
	};

	return (
		<Black className="black">
			<ListenDiv>
				<div className="flex">
					<h1>Listening...</h1>
					<i class="fa fa-times" onClick={closeHandler} />
				</div>
				<h2>{transcript}</h2>
				<div>
					<button
						className="mic"
						onClick={() => {
							resetTranscript();
						}}
					>
						<i class="fas fa-microphone" />
					</button>
				</div>
			</ListenDiv>
		</Black>
	);
};

const Black = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 12;
	h2 {
		color: grey;
	}
`;
const ListenDiv = styled.div`
	position: absolute;
	padding: 1rem 1rem;
	height: 40vh;
	width: 40%;
	background-color: white;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
	.flex {
		display: flex;
		justify-content: space-between;
		i {
			font-size: 1.5rem;
			color: grey;
			cursor: pointer;
		}
	}

	h1 {
		font-family: monospace;
		@media (max-width: 750px) {
			font-size: 1rem;
		}
	}

	.mic {
		border: 1px solid white;
		border-radius: 50%;
		background-color: red;
		cursor: pointer;
		width: 3rem;
		height: 3rem;
		color: white;
		font-size: 2rem;
		position: absolute;
		bottom: 10%;
		left: 47%;
		transform: translate(-50%, -50%);
		margin-left: 1rem;
		transition: .3s all ease;
		@media (max-width: 750px) {
			margin-left: 0.5rem;
		}
	}
`;

export default Listening;
