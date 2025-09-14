import Image from "next/image";
import { PATH } from "../../utils/constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Landing = () => {
  const pathname = usePathname()
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <div>
        <ul className="list">
          <a className="link" href={`${PATH}/massage`}>
            <li className="split">
              <Image src={`${PATH}/documents/img/shooting/AM_115.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-AM_115.jpeg`} alt="hand massage picture" />
              <div className="flex-container">
                <h2>Massage-Reiki</h2>
                <p>Offrez-vous un moment unique de bien-être où détente physique et harmonie intérieure se rencontrent, grâce à un massage qui écoute votre corps autant que votre esprit.</p>
                <br />
                {domLoaded && (
                  <a className="link right" href={`${PATH}/massage`}>
                    <button className={pathname === "/massage" ? "active-button" : ""} >Plus d'info</button>
                  </a>
                )}
              </div>
            </li>
          </a>
          <a className="link" href={`${PATH}/about`}>
            <li className="split">
              <div className="flex-container">
                <h2>Qu'est-ce que le Reiki?</h2>
                <p>
                  Le Reiki est une pratique énergétique douce et naturelle, destinée à harmoniser le corps et l'esprit. À travers un toucher ou un simple placement des mains, le praticien agit comme un jardinier attentif qui aide à créer les conditions propices à votre épanouissement...
                </p>
              </div>
              <Image src={`${PATH}/documents/img/shooting/AP_029.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-AP_029.jpeg`} alt="profil picture" />
            </li>
          </a>
        </ul>
      </div>
    </>
  )
}
export default Landing;