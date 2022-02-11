import styled from "styled-components";
import narutoImg from "../assets/img/naruto/naruto4.png";
import sasukeImg from "../assets/img/naruto/sasuke2.png";

const StyledArticle = styled.article`
	display: flex;
	justify-content: space-around;
	font-family: "Quicksand", sans-serif;
	.articleContainer {
		max-width: 1280px;
		width: 100%;
		height: 200px;
		display: flex;
		}
		img {
			width: 300px;
      max-width:100%;
			height: auto;
		}
		.articleText {
			margin-left: 1rem;
		}
	}
`;

export default function Article(props) {
	return (
		<div>
			<StyledArticle>
				<div className="articleContainer">
					<img src={narutoImg} alt="naruto" />

					<div className="articleText">
						<h4>Naruto</h4>
						<p>
							Naruto Uzumaki est un ninja du village caché de
							Konoha. Il devint le jinchûriki de Kyûbi le jour de
							sa naissance — ce qui lui valut d'être rejeté par la
							plupart des habitants de Konoha durant toute son
							enfance. Après avoir rejoint l'Équipe 7, Naruto
							travailla dur pour obtenir la reconnaissance des
							villageois tout en poursuivant son rêve de devenir
							Hokage.
						</p>
					</div>
				</div>
			</StyledArticle>

			<StyledArticle>
				<div className="articleContainer">
					<div className="articleText">
						<h4>Sasuke</h4>
						<p>
							Sasuke Uchiwa est l'un des personnages principaux de
							la série. Il a été initialement présenté comme un
							protagoniste, un membre de Konoha appartenant à
							l'Équipe Kakashi. Au cours de la série, il devint de
							plus en plus sombre, aboutissant à une alliance avec
							l'Akatsuki, devenant l'un des personnages les plus
							dynamiques de la série.
						</p>
					</div>

					<img src={sasukeImg} alt="sasuke" />
				</div>
			</StyledArticle>
		</div>
	);
}
