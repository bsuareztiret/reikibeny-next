import Image from "next/image";
import { MAIL, PATH } from "../../utils/constants";
import { useEffect, useState } from "react";

const MassageExplanation = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className="card">
      <ul className="list">
        <li className="split">
          <Image src={`${PATH}/documents/img/shooting/ab_02.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-ab_02.jpeg`} alt="hand massage picture" />
          <div className="flex-container">
            <h2>Massage-Reiki déroulement d'une séance</h2>
            <br />
            <h3 className="right">30min - L'accueil :</h3><p>Chaque séance débute par un moment d’échange où vous partagez vos attentes, vos éventuelles tensions, ou simplement vos besoins du moment.</p>
            <br />
            <h3 className="right">60/120min - Le massage :</h3><p> Le praticien s'appuie sur son expérience en Reiki et sa compréhension de l'équilibre corps-esprit pour adapter ses gestes.</p>
            <br />
            <h3 className="right">30min - La clotûre :</h3><p> À la fin de la séance, un temps est réservé pour revenir doucement à vous, avec éventuellement un échange pour approfondir les bienfaits du massage.</p>
            <br />
          </div>
        </li>
      </ul>
      <div className="flex-container">
        <h2>Tarifs</h2>
        <br />
        <h3>À votre domicile</h3>
        <p>J'exerce dans la région de Bruxelles</p>
        <p>Pour 1h de massage <b>: 90€</b></p>
        <p>Pour 1h30 de massage <b>: 140€</b></p>
        <br />
        <h3>À mon domicile</h3>
        <p>Pour une 1h de massage <b>: 70€</b></p>
        <p>Pour une 1h30 de massage <b>: 100€</b></p>
        <br />
      </div>
      <div className="flex-container list">
        <h2>Horaires</h2>
        <br />
        <p>Je suis disponible du <b>samedi au mardi</b>.</p>
        <p>Contacter moi pour plus d'information.</p>
        <br />
      </div>
      <br />
      <div className="flex-container">
        {domLoaded && (
          <a className="link" href={`mailto:${MAIL}`}>
            <button>Faites une demande de réservation par mail</button>
          </a>
        )}
      </div>
      <br />
    </div>
  )
}
export default MassageExplanation;