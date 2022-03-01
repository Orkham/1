import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
	display: flex;
	border-left: 1px solid rgba(255, 210, 164, 0.25);
	ul {
		display: flex;
		padding-left: 0;
		justify-content: center;
		align-items: center;
		li {
			list-style: none;
			padding-left: 1rem;
			color: #ffd2a4;
			a {
				text-decoration: none;
				border: none;
				background: none;
				font-family: "Quicksand", sans-serif;
				color: #ffd2a4;
				:hover {
					cursor: pointer;
					color: white;
				}
			}
		}
	}
`;

export default function Navbar() {
	return (
		<StyledNavbar>
			<ul>
				<li>
					<Link to="/1">HOME</Link>
				</li>
				<li>
					<Link to="/realisations">REALISATIONS</Link>
				</li>
				<li>
					<Link to="/documents">DOCUMENTS</Link>
				</li>
				<li>
					<Link to="/projets">PROJETS</Link>
				</li>
			</ul>
		</StyledNavbar>
	);
}
