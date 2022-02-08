import styled from "styled-components";
import narutobg from "./../../assets/banners/naruto2.jpg";
import Title from "./title";

const StyledHero = styled.section`
	display: flex;
	background-image: url(${narutobg});
	background-position: center;
	background-repeat: no-repeat;
	height: 600px;
`;

export default function Hero() {
	return (
		<StyledHero>
			<Title />
		</StyledHero>
	);
}
