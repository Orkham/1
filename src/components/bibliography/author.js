import styled from "styled-components";
import picture from "../../assets/img/naruto/pic/masashi_kishimoto.jpg";
import Book from "./book";

const StyledInterlude = styled.section`
	font-family: "Quicksand", sans-serif;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h3 {
		width: 80%;
		border: 4px double black;
		padding: 0.5rem;
		-webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);
		box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);
	}
	article {
		display: flex;
		width: 80%;
		justify-content: start;
		img {
			width: 50%;
		}
		> div {
			margin-left: 2rem;
			display: flex;
			flex-direction: column;
			width: 100%;
		}
	}
`;

export default function Biography() {
	return (
		<StyledInterlude>
			<h3>
				Le manga Naruto, écrit et dessiné par Masashi Kishimoto, est
				prépublié dans l’hebdomadaire Weekly Shōnen Jump de l’éditeur
				Shūeisha sous forme de feuilleton à partir du numéro 43 de 1999
				commercialisé le 4 octobre 1999 au Japon.
			</h3>
			<article>
				<img src={picture} alt="masashi kishimoto" />
				<div className="mangasList">
					<Book />
					<Book />
				</div>
			</article>
		</StyledInterlude>
	);
}
