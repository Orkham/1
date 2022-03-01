import styled from "styled-components";
import UnderConstructionImg from "../../assets/img/under_construction/under_construction.png";
import Button from "../button";

const StyledTemporaryPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: black;
	img {
		margin-top: 2rem;
		width: 90%;
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
			<Button name="Retour à l'accueil" link="/1" />
		</StyledTemporaryPage>
	);
}
