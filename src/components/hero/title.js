import styled from "styled-components";

const StyledTitle = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	max-width: 1280px;
	font-family: "Quicksand", sans-serif;
	justify-content: space-between;
	.titleContainer {
		align-self: start;
	}

	h1 {
		margin-left: 1rem;
		margin-bottom: 0;
	}
	h2 {
		margin-left: 3rem;
		margin-top: 0;
	}
	.buttonsList {
		margin-bottom: 2rem;
		display: flex;
		width: 100%;
		justify-content: space-around;
		button {
		}
	}
`;

export default function Title() {
	return (
		<StyledTitle>
			<div className="titleContainer">
				<h1>Les héros de mon enfance</h1>
				<h2>Des ninjas d'une nouvelle génération</h2>
			</div>
			<div className="buttonsList">
				<button>Sasuke</button>
				<button>Naruto</button>
			</div>
		</StyledTitle>
	);
}
