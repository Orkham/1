import styled from "styled-components";

const StyledSubtitle = styled.h3`
	display: flex;
	justify-content: space-around;
	width: 100%;
	font-family: "Quicksand", sans-serif;
	margin-top: 2rem;
`;

export default function Subtitle() {
	return (
		<StyledSubtitle>
			Le destin du garçon qui voulait devenir Hokage
		</StyledSubtitle>
	);
}
