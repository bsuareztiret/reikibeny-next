import Image from "next/image";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="floor-roof list">
      <a className="link" href="/">
        <div className="always-two-columns">
          <Image src="/documents/img/1.png" width={400} height={400} alt="logo reiki beny" />
          <h1>Reiki Beny</h1>
        </div>
      </a>
      <div className="flex-container-navbar right-navbar">
        <div className="index-grid container">
          <a className="link" href="/">
            <button className={pathname === "/" ? "active-button" : ""}>accueil</button>
          </a>
          <a className="link" href="/massage">
            <button className={pathname === "/massage" ? "active-button" : ""} >massage</button>
          </a>
          <a className="link" href="/gallery">
            <button className={pathname === "/gallery" ? "active-button" : ""} >gallery</button>
          </a>
          <a className="link" href="/about">
            <button className={pathname === "/about" ? "active-button" : ""} >about</button>
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;