import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main className="main">
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
