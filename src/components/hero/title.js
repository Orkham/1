import styled from "styled-components";
import Button from "../button";

const StyledTitle = styled.div`
	display: flex;
	flex-direction: column;
	font-family: "Questrial", sans-serif;
	margin: 1rem;
	h1 {
		font-size: 58px;
		color: white;
	}
	h2 {
		color: white;
	}
`;

export default function Title() {
	return (
		<StyledTitle>
			<h1>
				Nicolas Chatelais : <br />
				Développeur Front-End
			</h1>
			<h2>Intégration et développement d'interfaces web et mobile</h2>
			<Button name="Découvrir" link="/documents" />
		</StyledTitle>
	);
}
