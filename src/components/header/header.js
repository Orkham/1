import styled from "styled-components";
import ContactButton from "./contactButton";
import Logo from "./logo";
import Navbar from "./navbar";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	background-color: #000;
	padding: 0 1rem;
	align-items: center;
	.navContainer {
		display: flex;
		img {
			margin-right: 1rem;
		}
	}
`;

export default function Header() {
	return (
		<StyledHeader className="header">
			<div className="navContainer">
				<Logo />
				<Navbar />
			</div>
			<ContactButton />
		</StyledHeader>
	);
}
