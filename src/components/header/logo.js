import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo/Logoperso.svg";

const StyledLogo = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");
	font-family: "Architects Daughter", cursive;
	display: flex;
	.initials {
		color: #d9c29b;
		padding-right: 0.5rem;
	}
	.title {
		color: #3a3a3a;
	}
`;

export default function Logo() {
	return (
		<StyledLogo className="logo">
			<Link to="/1">
				<img src={logo} alt="nico dev" />
			</Link>
		</StyledLogo>
	);
}
