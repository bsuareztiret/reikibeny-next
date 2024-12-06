import Footer from "@/template/footer";
import MassageExplanation from "@/template/massage-explanation";
import Navbar from "@/template/navbar";

const MassagePage = () => {
	return (
		<div className="index-grid">
			<div className="index-grid-header">
				<Navbar />
			</div>
			<div className="index-grid-way">
				<MassageExplanation />
			</div>
			<div className="index-grid-phylo">
				<Footer />
			</div>
		</div>
	)
}

export default MassagePage;