import Image from "next/image";
import { PATH } from "../../utils/constants";

const AboutExplanation = () => {
  return (
    <div>
      <ul className="list">
        <li className="split">
          <Image src={`${PATH}/documents/img/shooting/pp_02.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-pp_02.jpeg`} alt="profil picture" />
          <div className="flex-container">
            <h2>Mon parcours</h2>
            <p>
              Je suis originaire de Bruxelles. J'y ai grandi, fait toutes mes études, et je m'y sens toujours aussi bien. Observateur du monde qui m'entoure et passionné de dessin, j'ai orienté mes études vers le domaine artistique.
            </p>
            <br />
            <p>
              C'est à cette période que j'ai rencontré un voisin, qui est aussi un ami. Heureux et épanoui, il m'a fait découvrir le Reiki, pour lequel j'ai voulu me former au plus vite. Toujours aussi curieux, j'ai découvert en même temps le Yi Jing, le livre des changements, que je consulte régulièrement. Pour moi, ce livre est un véritable puit de sagesse.
            </p>
            <br />
            <p>
              Dans les écoles d'art, j'ai étudié la communication visuelle, le graphisme, la mise en page, l'illustration, la peinture, ainsi que l'art numérique… Autant de domaines qui ont éveillé ma curiosité.
            </p>
            <br />
            <p>
              Il n'a fallu qu'un pas pour que je m'intéresse à la programmation, qui m'a naturellement emmené vers le monde virtuel et ses multiples possibilités. J'ai découvert la beauté de l'open source, cette envie de partage et l'entraide indispensable à l'apprentissage d'un univers inconnu. Parallèlement à ce parcours, je me suis également passionné pour les arts martiaux et les pratiques sportives en général.
            </p>
            <br />
            <p>
              Confiné chez moi à cause d'une pandémie, j'ai trouvé des ressources pour apprendre une forme de musculation. Mon objectif n'était pas esthétique, mais, enrichi par mon apprentissage du Reiki, j'ai abordé cette nouvelle discipline sous l'angle de la santé. Pour moi, le bien-être physique est indissociable du bien-être mental. Être à l'écoute de son corps est primordial, car il nous révèle souvent ce qui nous importe réellement. Il nous aide à être plus proches de nos émotions, qui sont parfois perçues comme des obstacles, alors qu'elles peuvent souvent être des moteurs de changement.
            </p>
            <br />
            <p>
              Qui dit bien-être physique et spirituel m'amène également à explorer l'alimentation. Pour les anciens, la nourriture est la première médecine. Je crois que chacun doit trouver ce qui lui convient le mieux, car nous sommes tous différents.
            </p>
            <br />
            <p>
              Je fais les choses pour moi-même, avec sincérité, ce qui m'apporte beaucoup de plaisir. Cette sincérité a attiré des personnes autour de moi, qui m'ont demandé de partager mon expérience, ce qui nous a procuré beaucoup de joie. C'est ainsi que m'est venue l'idée d'offrir cette expérience à quiconque souhaiterait la vivre.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AboutExplanation;