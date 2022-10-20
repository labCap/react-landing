import React from "react";
import { Button } from "../Button/Button";

import "./Section.scss";

export const Section = ({ title, subtitle, bgImg }) => {
	return (
		<section
			className="section"
			style={{ background: `url(${bgImg}) no-repeat center/cover` }}
		>
			<div className="container">
				<div className="section__inner">
					<h2 className="section__title">{title}</h2>
					<h3 className="section__subtitle">{subtitle}</h3>
					<Button />
				</div>
			</div>
		</section>
	);
};
