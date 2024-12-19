import Header from "@/template/header";
import Massage from "@/template/massage";
import Gallery from "@/template/gallery";
import About from "@/template/about";
import Footer from "@/template/footer";
import Navbar from "@/template/navbar";

const Index = () => {
  return (
    <div className="index-grid">
      <div className="index-grid-header">
        <Navbar />
      </div>
      <div className="index-grid-choose">
        <h1>{process.env.NEXT_PUBLIC_ENVIRONMENT}</h1>
        <Header />
      </div>
      <div className="index-grid-way">
        <Massage />
        <Gallery />
        <About />
      </div>
      <div className="index-grid-phylo">
        <Footer />
      </div>
    </div>
  )
}

export default Index;