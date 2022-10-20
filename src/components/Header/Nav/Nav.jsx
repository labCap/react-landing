import React from "react";

import "./Nav.scss";

export const Nav = ({ openMenu }) => {
	return (
		<nav className={openMenu ? "nav menu-open" : "nav"}>
			<ul className="nav__list">
				<li className="nav__list-item">
					<a href="#" className="nav__list-link">
						Work
					</a>
				</li>
				<li className="nav__list-item">
					<a href="#" className="nav__list-link">
						About
					</a>
				</li>
				<li className="nav__list-item">
					<a href="#" className="nav__list-link">
						Blog
					</a>
				</li>
				<li className="nav__list-item">
					<a href="#" className="nav__list-link">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};
