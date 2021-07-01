import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { fetchSearch, categorySearch } from '../actions/topHeadlineAction';
import { down } from '../animation';
import Listening from './Listening';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Header = ({ inputText, setInputText, selectText, setSelectText, isMicOn, setIsMicOn }) => {
	const [ toggle, setToggle ] = useState(false);

	const dispatch = useDispatch();

	const handleMic = (e) => {
		e.preventDefault();
		SpeechRecognition.startListening({
			continuous: true
		});
		setIsMicOn(true);
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const getData = (e) => {
		e.preventDefault();
		dispatch({ type: 'CLEAR_SELECT' });
		dispatch(fetchSearch(inputText));
		setInputText('');
		scrollTop();
	};

	const inputHandler = (e) => {
		setInputText(e.target.value);
	};

	const clearSearch = () => {
		dispatch({ type: 'CLEAR_SEARCH' });
		dispatch({ type: 'CLEAR_SELECT' });
		setInputText('');
		scrollTop();
	};

	const selectHandler = (e) => {
		setSelectText(e.target.value);
	};

	const getSelectData = () => {
		dispatch(categorySearch(selectText));
		dispatch({ type: 'CLEAR_SEARCH' });
		scrollTop();
		setToggle(false);
		setInputText('');
	};

	return (
		<div>
			<StyledHeader variants={down} initial="hidden" animate="show">
				<h1 onClick={clearSearch}>
					<span>News </span> Teller
				</h1>
				<StyledSearch>
					<form>
						<input type="text" value={inputText} onChange={inputHandler} />
						<button onClick={getData}>
							<i class="fas fa-search" />
						</button>
					</form>
					<div>
						<button className={isMicOn ? 'voice red' : 'voice'} onClick={handleMic}>
							<i class="fas fa-microphone" />
						</button>
					</div>
				</StyledSearch>
				<StyledCategory
					style={{
						transform: toggle ? 'translateX(0%)' : ''
					}}
				>
					<h4>Category</h4>
					<Flex>
						<select onChange={selectHandler}>
							<option selected disabled>
								None
							</option>
							<option value="Business">Business</option>
							<option value="Entertainment">Entertainment</option>
							<option value="General">General</option>
							<option value="Health">Health</option>
							<option value="Science">Science</option>
							<option value="Sports">Sports</option>
							<option value="Technology">Technology</option>
						</select>
						<button onClick={getSelectData}>
							<i class="fas fa-search" />
						</button>
					</Flex>
				</StyledCategory>
				<StyledBurger
					onClick={() => setToggle(!toggle)}
					style={{
						border: toggle ? '2px solid yellow' : ''
					}}
				>
					<i class="fas fa-bars" />
				</StyledBurger>
			</StyledHeader>
			{isMicOn ? (
				<Listening
					setIsMicOn={setIsMicOn}
					isMicOn={isMicOn}
					setInputText={setInputText}
					inputText={inputText}
				/>
			) : (
				''
			)}
		</div>
	);
};

const StyledHeader = styled(motion.nav)`
    display: flex;
	position: fixed;
	width: 100%;
	min-height: 10vh;
	z-index: 10;
	justify-content: space-around;
	align-items: center;
	background-color: black;
	color: white;
	@media(max-width: 750px) {
		padding: 0rem 1rem;
	}

	h1 {
		cursor: pointer;
		font-family: "Abril Fatface";
		span {
			color: #4cc9f0;
		}
		 @media (max-width: 550px) {
			 font-size: 1.3rem;
		 }
	}
	
`;
const StyledSearch = styled(motion.div)`
    display: flex;
	align-items: center;
	   
   form {
	   display: flex;
	   input {
		   width: 15rem;
		   height: 4vh;
		   padding: 0rem 0.5rem;
		   outline: none;
		   border: none;
		   font-weight: lighter;
		   color: white;
		   font-size: 1rem;
		   border-top-left-radius: 0.2rem;
		   border-bottom-left-radius: 0.2rem;
		   background-color: #34495e;
		   @media(max-width: 750px) {
		    width: 7rem;
	    }
	   }
         
	   button {
		   position: relative;
		   width: 2rem;
		   background-color: #4cc9f0;
		   border: none;
		   cursor: pointer;
		   font-weight: bold;
		   letter-spacing: 0.1rem;
		   font-size: 0.8rem;
		   color: white;
		   border-top-right-radius: 0.2rem;
		   border-bottom-right-radius: 0.2rem;
		  

	   }
	   
   }
	   .voice {
		   border: 1px solid white;
		   position: relative;
		   padding: 0.2rem 0.2rem;
		   border-radius: 50%;
		   color: white;
		   background-color: inherit;
		   cursor: pointer;
		   width: 1.8rem;
		   height: 1.8rem;
		   font-size: 1.2rem;
		   margin-left: 1rem;
		   transition: .3s all ease;
		   
		    @media(max-width: 750px) {
		        margin-left: 0.5rem;
	    }
	   }
	  
	   .red {
		   background-color: red;
		   color: white;
	   }

	   

   `;
const StyledCategory = styled(motion.div)`
	   text-align: center;
	   h4 {
		   padding-bottom: 0.3rem;
		   letter-spacing: 0.1rem;
	   }
	   @media(max-width: 750px) {
		transform: translateX(-100%);
		position: fixed;
		height: 100vh;
		top: 64px;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.7);
		transition: transform .3s ease;
		h4 {
			top: 12px;
			position: absolute;
			width: 100%;
			padding-top: 1rem;
		}
	   }
   `;

const Flex = styled(motion.div)`
    display: flex;
	select {
		   display: flex;
           width: 10rem;
           height: 4vh;
           line-height: 3;
           background: #2c3e50;
           overflow: hidden;
           color: white;
           border: none;
		   outline: none;
		   cursor: pointer;
		   border-top-left-radius: 0.2rem;
		   border-bottom-left-radius: 0.2rem;
		   @media(max-width: 750px) {
			  width: 85%;
			  height: 29px;
		   }
	   }
	   
	   
	button {
		   width: 2rem;
		   background-color: #4cc9f0;
		   border: none;
		   cursor: pointer;
		   font-weight: bold;
		   letter-spacing: 0.1rem;
		   font-size: 0.8rem;
		   color: white;
		   border-top-right-radius: 0.2rem;
		   border-bottom-right-radius: 0.2rem;
		    @media(max-width: 750px) {
			  width: 15%;
			  height: 29px;
		   }
	}
	@media(max-width: 750px) {
		flex-direction: row;
		align-items: flex-start;
		position: absolute;
		display: flex;
		padding: 1rem 1rem;
		top: 10%;
		width: 100%;
		color: black;
		

	}

`;

const StyledBurger = styled(motion.div)`
    display: none;
	font-size: 1.5rem;
	cursor: pointer;
	padding: 0.3rem 0.3rem;
	@media (max-width: 750px) {
		display: block;
	}
	@media (max-width: 450px) {
		margin-left: 1rem;
	}
`;

export default Header;
