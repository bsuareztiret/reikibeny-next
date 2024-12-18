import Image from "next/image";
import { PATH } from "../../utils/constants";

const OnTable = () => {
  return (
    <div className="card">
      <ul className="list">
        <li className="split">
          <Image src={`${PATH}/documents/img/shooting/ab_01.jpeg`} width={2500} height={3800} blurDataURL={`${PATH}/documents/img/fast-loading/lc-ab_01.jpeg`} alt="profil picture" />
          <div className="flex-container">
            <h2>À table</h2>
            <p>
              Mon approche du bien-être va bien au-delà des soins énergétiques : elle s'étend jusqu'à la table, où je m'inspire des traditions anciennes pour créer des aliments vivants. Ces fermentations, véritables alliées pour la santé, illustrent ma philosophie : tout, même dans la nature, est un équilibre entre transformation et épanouissement. Comme pour le Reiki, la fermentation est un processus qui demande patience, attention et respect des rythmes naturels. En nourrissant l'intérieur, que ce soit par l'énergie ou l'alimentation, nous favorisons un bien-être durable et profond.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default OnTable;