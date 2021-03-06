import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
	background: ${(props) => props.primario ? '#5B69E2' : '#000'};
	width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
	margin-left: 1.25rem; 
	border: none;
	border-radius: 0.625rem; 
	color: #fff;
	font-family: 'Work Sans', sans-serif;
	height: 3.75rem;
	padding: 1.25rem 1.87rem; 
	font-size: 1.50rem; 
	font-weight: 500;
	cursor: pointer;
	text-decoration: none;
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	outline: none;

	svg {
		height: ${(props) => props.bigIcon ? '100%' : '0.75rem;'};  /* 12px */
		fill: white;
	}
`;

export default Button