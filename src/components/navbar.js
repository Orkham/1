import styled from "styled-components";

const StyledNavbar = styled.nav`
	ul {
		display: flex;
		padding-left: 0;
		justify-content: center;
		li {
			list-style: none;
			padding-left: 1rem;
			button {
				text-decoration: none;
				border: none;
				background: none;
				font-family: "Quicksand", sans-serif;
				:hover {
					cursor: pointer;
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
					<button>Naruto</button>
				</li>
				<li>
					<button>Dragon Ball</button>
				</li>
				<li>
					<button>One Piece</button>
				</li>
			</ul>
		</StyledNavbar>
	);
}
