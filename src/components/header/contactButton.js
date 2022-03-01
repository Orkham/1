import styled from "styled-components";

const StyledContactButton = styled.button`
	display: flex;
	height: 2rem;
	justify-content: center;
	align-items: center;
	:hover {
		cursor: pointer;
	}
	a {
		text-decoration: none;
		color: black;
	}
`;

export default function ContactButton() {
	return (
		<StyledContactButton>
			<a href="mailto:ni.chatelais@gmail.com">CONTACTEZ-MOI</a>
		</StyledContactButton>
	);
}
