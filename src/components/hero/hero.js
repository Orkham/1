import styled from "styled-components";
import Title from "./title";
import IdPhoto from "../../assets/img/id.png";

const StyledHero = styled.section`
	display: flex;
`;

export default function Hero() {
	return (
		<StyledHero>
			<Title />
			<img src={IdPhoto} alt="nicolas chatelais" />
		</StyledHero>
	);
}
