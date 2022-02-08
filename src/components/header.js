import styled from "styled-components";
import Logo from "./logo";
import Navbar from "./navbar";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	background-color: #f1f1f1;
	padding: 0 1rem;
`;

export default function Header() {
	return (
		<StyledHeader className="header">
			<Logo />
			<Navbar />
		</StyledHeader>
	);
}
