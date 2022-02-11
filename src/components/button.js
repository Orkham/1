import styled from "styled-components";

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-item: center;
	width: 10rem;
	font-family: "Quicksand", sans-serif;
	margin: 1rem;
	background-color: #f0874d;
	border: border: 5px outset #F0874D;
	border-radius: 10px;
	cursor: pointer;
	padding: 1rem;
  :hover{
    color:white;
  }
  :active{
    background-color: #ee1f17;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export default function Button(props) {
	return <StyledButton>{props.name}</StyledButton>;
}
