import AboutExplanation from "@/template/about-explanation";
import Footer from "@/template/footer";
import Navbar from "@/template/navbar";

const AboutPage = () => {
	return (
		<div className="index-grid">
			<div className="index-grid-header">
				<Navbar />
			</div>
			<div className="index-grid-way">
				<AboutExplanation />
			</div>
			<div className="index-grid-phylo">
				<Footer />
			</div>
		</div>
	)
}

export default AboutPage;