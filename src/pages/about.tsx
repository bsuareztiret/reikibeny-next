import AboutExplanation from "@/template/about-explanation";
import Approach from "@/template/approach";
import Footer from "@/template/footer";
import Navbar from "@/template/navbar";
import NavbarAbout from "@/template/navbar-about";
import OnTable from "@/template/on-table";
import WhatIsReiki from "@/template/what-is-reiki";
import { useState } from "react";

const AboutPage = () => {
	const [subPage, setSubPage] = useState("What");
	return (
		<div className="index-grid">
			<div className="index-grid-header">
				<Navbar />
			</div>
			<div className="index-grid-way">
				<NavbarAbout setSubPage={setSubPage} subPage={subPage} />
				{subPage === "What" && (
					<WhatIsReiki />
				)}
				{subPage === "Approach" && (
					<Approach />
				)}
				{subPage === "Table" && (
					<OnTable />
				)}
				{subPage === "About" && (
					<AboutExplanation />
				)}
			</div>
			<div className="index-grid-phylo">
				<Footer />
			</div>
		</div>
	)
}

export default AboutPage;