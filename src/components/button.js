import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
	margin: 2rem 0;
	width: 10rem;
	height: 2rem;
	border-radius: 25px;
	background: #ffd2a4;
	border: none;
	text-decoration: none;
	color: black;
	font-family: "Questrial", sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	:hover {
		cursor: pointer;
		transition: 0.3s;
		box-shadow: 5px 5px 0 pink;
	}
	:active {
		transform: translateY(4px);
	}
`;

export default function Button(props) {
	return <StyledButton to={props.link}>{props.name} </StyledButton>;
}
