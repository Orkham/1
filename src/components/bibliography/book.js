import styled from "styled-components";

const StyledBook = styled.div`
	display: flex;
	width: 100%;
	height: 60px;
	.year {
		color: #f0874d;
		flex-grow: 1;
		margin-top: 0.2rem;
	}
	.info {
		display: flex;
		flex-direction: column;
		flex-grow: 3;
		background: red;
		margin-top: 0.2rem;
		.title {
			font-size: larger;
		}
		.story {
			font-size: smaller;
			color: rgba(137, 137, 137, 1);
		}
	}
`;

export default function Book() {
	return (
		<StyledBook>
			<p className="year">1998</p>
			<div className="info">
				<div className="title">Karakuri</div>
				<div className="story">Résumé de l'histoire</div>
			</div>
		</StyledBook>
	);
}
