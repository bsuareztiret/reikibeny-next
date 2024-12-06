import Image from "next/image";
import { usePathname } from 'next/navigation'
import { PATH } from "../../utils/constants";

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="floor-roof list">
      <a className="link" href={`${PATH}/`}>
        <div className="always-two-columns">
          <Image src={`${PATH}/documents/img/1.png`} width={400} height={400} alt="logo reiki beny" />
          <h1>Reiki Beny</h1>
        </div>
      </a>
      <div className="flex-container-navbar right-navbar">
        <div className="index-grid container">
          <a className="link" href={`${PATH}/`}>
            <button className={pathname === "/" ? "active-button" : ""}>accueil</button>
          </a>
          <a className="link" href={`${PATH}/massage`}>
            <button className={pathname === "/massage" ? "active-button" : ""} >massage</button>
          </a>
          <a className="link" href={`${PATH}/gallery`}>
            <button className={pathname === "/gallery" ? "active-button" : ""} >gallery</button>
          </a>
          <a className="link" href={`${PATH}/about`}>
            <button className={pathname === "/about" ? "active-button" : ""} >about</button>
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;