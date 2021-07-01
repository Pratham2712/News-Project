import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popup } from '../animation';

const Newscard = ({ data }) => {
	const { source, urlToImage, publishedAt, title, url } = data;
	return (
		<StyledCard variants={popup} initial="hidden" animate="show">
			<h2>{source.name}</h2>
			<a href={url} target="_blank">
				<i class="fas fa-external-link-alt" />
			</a>
			<img src={urlToImage} alt="" />
			<h4>{new Date(publishedAt).toDateString()}</h4>
			<h3>{title}</h3>
		</StyledCard>
	);
};

const StyledCard = styled(motion.div)`
	box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
	border-radius: 1rem;
	position: relative;
	
    img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
		@media (max-width: 750px) {
			height: 30vh;
		}
	}
	h5 {
		padding: 0rem 1rem;
	}
	h2 {
		text-align: center;
		padding: 1rem 1rem;
		color: #696060;
		@media (max-width: 550px) {
			font-size: 1.1rem;
		}
	}
	h4 {
		padding: 1rem 1rem;
		color: #615a5a;
	}
	h3 {
		padding: 0rem 1rem;
		padding-bottom: 1rem;
		color: black;
		@media (max-width: 550px) {
			font-size: 1rem;
		}
	}
	
	a {
		position: absolute;
		top: 17px;
		right: 15px;
		text-decoration: none;
		
	}
	
`;

export default Newscard;
