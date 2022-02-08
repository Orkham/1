import styled from "styled-components";

const StyledTitle = styled.div`
	display: flex;
	flex-direction: column;
	.iconsList {
		display: flex;
		flex-direction: row;
	}
`;

export default function Title() {
	return (
		<StyledTitle>
			<h1>Ceci est un titre vraiment trop magnifique</h1>
			<h2>Mais aussi un superbe sous-titre</h2>
			<div>
				<button>Premier</button>
				<button>Second</button>
			</div>
			<div className="iconsList">
				<div>icone1</div>
				<div>icone2</div>
				<div>icone3</div>
				<div>icone4</div>
			</div>
		</StyledTitle>
	);
}
