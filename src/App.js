import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";

const sectionList = [
	{ id: 1, title: "Style & Beauty", subtitle: "New fashion brand", img: img1 },
	{
		id: 2,
		title: "Living Room Girls",
		subtitle: "Interior Design - Red Room",
		img: img2,
	},
	{
		id: 3,
		title: "The shape of water flowers",
		subtitle: "Book Cover",
		img: img3,
	},
	{
		id: 4,
		title: "Capturing the sunlight",
		subtitle: "Fashion Photoshoot",
		img: img4,
	},
	{
		id: 5,
		title: "Looking on the other side",
		subtitle: "Portrait photography",
		img: img5,
	},
];

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main className="main">
				{sectionList.map((e) => (
					<Section
						key={e.id.toString()}
						title={e.title}
						subtitle={e.subtitle}
						bgImg={e.img}
					/>
				))}

				<section className="start">
					<div className="container">
						<div className="start__inner">
							<h2 className="start__title">Let's do something amazing.</h2>
							<h3 className="start__subtitle">Get in touch with us today</h3>
							<a href="#" className="start__btn">
								START A PROJECT
							</a>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default App;
