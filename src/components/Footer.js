import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<StyledFooter>
			<h4>© News Teller. All Rights Reserved</h4>
			<div>
				<a href="#">
					<i class="fab fa-facebook" />
				</a>
				<a href="#">
					<i class="fab fa-twitter-square" />
				</a>
				<a href="https://www.linkedin.com/in/pratham-vaishya-b40b49212/" target="_blank">
					<i class="fab fa-linkedin" />
				</a>
			</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	background-color: #26272b;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 3rem;
	@media (max-width: 550px) {
		padding: 0.5rem 1rem;
		h4 {
			font-size: 1rem;
		}
	}
	div {
		display: flex;
		justify-content: space-evenly;
	}
	a {
		font-size: 25px;
		margin: 0px 15px;
		color: white;
		text-decoration: none;
	}
`;

export default Footer;
