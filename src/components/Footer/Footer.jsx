import React from "react";

import "./Footer.scss";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<div className="footer__box">
						<div className="footer__info">© 2022 Paper. Made with ❤</div>
						<div className="footer__info">Webflow, by Kreshnik Beqi</div>
					</div>
					<div className="footer__box">
						<a href="#" className="footer__info">
							Image Licensing
						</a>
						<a href="#" className="footer__info">
							Instagram
						</a>
						<a href="#" className="footer__info">
							Dribbble
						</a>
						<a href="#" className="footer__info">
							Twitter
						</a>
						<a href="#" className="footer__info">
							Facebook
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
