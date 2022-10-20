import React from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav/Nav";

import "./Header.scss";

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<Logo />
					<Nav />
				</div>
			</div>
		</header>
	);
};
