import styled from "styled-components";
import UnderConstructionImg from "../../assets/img/under_construction/under_construction.png";
import { Link } from "react-router-dom";

const StyledTemporaryPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	img {
		margin-top: 2rem;
		width: 90%;
	}
	button {
		margin: 2rem 0;
		width: 10rem;
		height: 2rem;
		border-radius: 25px;
		background: #ffd2a4;
		:hover {
			cursor: pointer;
			transition: 0.5s;
			box-shadow: 5px 5px 0 pink;
		}
		a {
			text-decoration: none;
			color: black;
			font-family: "Quicksand", sans-serif;
		}
	}
`;

export default function TemporaryPage() {
	return (
		<StyledTemporaryPage>
			<img
				src={UnderConstructionImg}
				alt="page en cours de construction"
			/>
			<button>
				<Link to="/1">Retour à l'accueil</Link>
			</button>
		</StyledTemporaryPage>
	);
}
