import Image from "next/image";
import { PATH } from "../../utils/constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Massage = () => {
  const pathname = usePathname()
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <a className="link" href={`${PATH}/massage`}>
      <div className="card">
        <ul className="list">
          <li className="split">
            <Image src={`${PATH}/documents/img/shooting/ab_02.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-ab_02.jpeg`} alt="hand massage picture" />
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
        </ul>
      </div>
    </a>
  )
}
export default Massage;