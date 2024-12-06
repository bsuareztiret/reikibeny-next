import Footer from "@/template/footer";
import GalleryExplanation from "@/template/gallery-explanation";
import Navbar from "@/template/navbar";

const GalleryPage = () => {
	return (
		<div className="index-grid">
			<div className="index-grid-header">
				<Navbar />
			</div>
			<div className="index-grid-way">
				<GalleryExplanation />
			</div>
			<div className="index-grid-phylo">
				<Footer />
			</div>
		</div>
	)
}

export default GalleryPage;