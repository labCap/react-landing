import React from "react";

import "./Section.scss";

export const Section = () => {
	return (
		<section className="section">
			<div className="container">
				<div className="section__inner">
					<h2 className="section__title">Style & Beauty</h2>
					<h3 className="section__subtitle">New fashion brand</h3>
					<a href="#" className="btn">
						VIEW PROJECT
					</a>
				</div>
			</div>
		</section>
	);
};
