import Image from "next/image";
import { PHONE, MAIL, PATH } from "../../utils/constants";
import { useEffect, useState } from "react";
import Prices from "./prices";

const MassageExplanation = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div >
      <Prices />
      <div className="flex-container">
        <h2>Horaires</h2>
        <br />
        <p>Je suis disponible du <b>samedi au mardi</b>.</p>
        <p>Contacter moi pour plus d'information.</p>
        <br />
      </div>
      <br />
      <ul className="list">
        <li className="split">
          <Image src={`${PATH}/documents/img/shooting/ab_02.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-ab_02.jpeg`} alt="hand massage picture" />
          <div className="flex-container">
            <h2>Déroulement d'une séance</h2>
            <br />
            <h3 className="right">Phase I :</h3><p>Chaque séance débute par un moment d’échange où vous partagez vos attentes, vos éventuelles tensions, ou simplement vos besoins du moment.</p>
            <h3 className="right">Phase II :</h3><p>Je m'appuie sur mon expérience en Reiki et ma compréhension de l'équilibre corps-esprit pour adapter mes gestes à vos besoins.</p>
            <h3 className="right">Phase III :</h3><p>À la fin de la séance, un temps est réservé pour revenir doucement à vous, avec éventuellement un échange pour approfondir les bienfaits du massage.</p>
            <br />
          </div>
        </li>
      </ul>
      <div className="flex-container">
        {domLoaded && (
          <a className="link" href={`mailto:${MAIL}`}>
            <button>Réserver par mail</button>
          </a>
        )}
        {domLoaded && (
          <a className="link" href={`tel:${PHONE}`}>
            <button>Réserver par téléhone</button>
          </a>
        )}
      </div>
      <br />
    </div>
  )
}
export default MassageExplanation;