import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopHeadlines } from '../actions/topHeadlineAction';
import Newscard from '../components/Newscard';
import Footer from '../components/Footer';
import { slide } from '../animation';
import Spinner from '../components/Spinner';

const Home = ({ inputText, setInputText, selectText, setSelectText, isMicOn, setIsMicOn }) => {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(loadTopHeadlines());
		},
		[ dispatch ]
	);

	const { topHeadline, universal, category, isTopHeadlineLoading } = useSelector((state) => state.top);

	return (
		<div>
			<Header
				inputText={inputText}
				setInputText={setInputText}
				selectText={selectText}
				setSelectText={setSelectText}
				isMicOn={isMicOn}
				setIsMicOn={setIsMicOn}
			/>
			{category.length ? (
				<StyledSection2>
					<Styledh2 variants={slide} initial="hidden" animate="show">
						{selectText}
					</Styledh2>
					<Grid>{category.map((data) => <Newscard data={data} key={Math.random()} />)}</Grid>
				</StyledSection2>
			) : (
				''
			)}

			{universal.length ? (
				<StyledSection2>
					<Styledh2 variants={slide} initial="hidden" animate="show">
						{inputText}
					</Styledh2>
					<Grid>{universal.map((data) => <Newscard data={data} key={Math.random()} />)}</Grid>
				</StyledSection2>
			) : (
				''
			)}

			{isTopHeadlineLoading ? (
				<Spinner />
			) : (
				<StyledSection>
					<Styledh2 variants={slide} initial="hidden" animate="show">
						Top Headlines
					</Styledh2>
					<Grid>{topHeadline.map((data) => <Newscard data={data} key={Math.random()} />)}</Grid>
				</StyledSection>
			)}
			<Footer />
		</div>
	);
};

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(350px, 1fr));
	grid-row-gap: 2rem;
	grid-column-gap: 2rem;
	padding: 3rem 3rem;
	@media (max-width: 750px) {
    padding: 1rem 1rem;
	grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
	grid-row-gap: 1rem;
	grid-column-gap: 1rem;
   }
	@media (max-width: 550px) {
	grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
   }
`;

const Styledh2 = styled(motion.h2)`
    padding-bottom: 2rem;
	color: #4cc9f0;
	font-size: 2rem;
	text-transform: uppercase;
	padding-top: 1rem;
	padding-bottom: 0rem;
	padding-left: 3rem;
	font-weight: lighter;
	@media (max-width: 550px) {
		padding-left: 1rem;
		font-size: 1.2rem;
	}
`;
const StyledSection = styled(motion.div)`
    padding-top: 5rem;
`;
const StyledSection2 = styled(motion.div)`
    padding-top: 5rem;
`;
export default Home;
