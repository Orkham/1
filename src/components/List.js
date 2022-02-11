import styled from "styled-components";
import Button from "./button";

const StyledListing = styled.ul`
	display: flex;
	justify-content: space-around;
`;

export default function CharaListing() {
	return (
		<StyledListing>
			<Button name="Retour aux sources" />
		</StyledListing>
	);
}
