import Image from "next/image";
import { PATH } from "../../utils/constants";

const About = () => {
  return (
    <a className="link" href={`${PATH}/about`}>
      <div className="card">
        <ul className="list">
          <li className="split">
            <Image src={`${PATH}/documents/img/shooting/pp_02.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL="/documents/img/fast-loading/lc-pp_02.jpeg" alt="profil picture" />
            <div className="flex-container">
              <h2>À propos</h2>
              <p>
                C'est à cette période que j'ai rencontré un voisin, qui est aussi un ami. Heureux et épanoui, il m'a fait découvrir le Reiki, pour lequel j'ai voulu me former au plus vite. Toujours aussi curieux, j'ai découvert en même temps le Yi Jing, le livre des changements, que je consulte régulièrement en cas de doute. Pour moi, ce livre est un véritable puits de sagesse.
              </p>
              <br />
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