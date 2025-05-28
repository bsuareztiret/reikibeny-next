import Image from "next/image";
import { PATH } from "../../utils/constants";

const WhatIsReiki = () => {
  return (
    <div>
      <ul className="list">
        <li className="split">
          <Image src={`${PATH}/documents/img/shooting/ab_04.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-ab_04.jpeg`} alt="profil picture" />
          <div className="flex-container">
            <h2>Qu'est-ce que le Reiki</h2>
            <p>
              Le Reiki est une pratique énergétique douce et naturelle, destinée à harmoniser le corps et l'esprit. À travers un toucher ou un simple placement des mains, le praticien agit comme un jardinier attentif qui aide à créer les conditions propices à votre épanouissement. Si vous êtes une plante qui peine à pousser, le Reiki peut être ce soutien qui apporte un tuteur pour stabiliser vos bases ou dirige davantage de lumière vers vous pour nourrir votre croissance.
            </p>
            <br />
            <p>
              Cependant, tout comme une plante réalise elle-même l’effort de croître, le Reiki ne fait que faciliter un processus déjà présent en vous. L'énergie vitale, qui circule et nourrit votre être, est guidée pour dissiper les blocages, réduire le stress et favoriser un meilleur équilibre. Ce n’est pas une intervention extérieure qui impose un changement, mais une invitation subtile à renouer avec vos propres ressources pour retrouver force et vitalité.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default WhatIsReiki;