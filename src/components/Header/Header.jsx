import React from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav/Nav";

import "./Header.scss";

export const Header = () => {
	const [openMenu, setOpenMenu] = React.useState(false);

	const handleClick = () => {
		setOpenMenu(!openMenu);

		openMenu
			? document.body.classList.remove("lock")
			: document.body.classList.add("lock");
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<Logo />
					<Nav openMenu={openMenu} />
					<div
						className={openMenu ? "icon-menu menu-open" : "icon-menu"}
						onClick={handleClick}
					>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
};
