import Image from "next/image";
import { PATH } from "../../utils/constants";

const About = () => {
  return (
    <a className="link" href={`${PATH}/about`}>
      <div>
        <ul className="list">
          <li className="split">
            <Image src={`${PATH}/documents/img/shooting/ab_04.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-ab_04.jpeg`} alt="profil picture" />
            <div className="flex-container">
              <h2>Qu'est-ce que le Reiki?</h2>
              <p>
                Le Reiki est une pratique énergétique douce et naturelle, destinée à harmoniser le corps et l'esprit. À travers un toucher ou un simple placement des mains, le praticien agit comme un jardinier attentif qui aide à créer les conditions propices à votre épanouissement...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </a>
  )
}
export default About;