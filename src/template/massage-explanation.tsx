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
      <ul className="list">
        <li className="split">
          <div>
            <Image src={`${PATH}/documents/img/shooting/AM_111.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-AM_111.jpeg`} alt="hand massage picture" />
            <Prices />
            <div className="flex-container">
              <br />
              <h1>Disponibilités</h1>
              <br />
              <p>Je suis disponible du <b>samedi au mardi</b>.</p>
              <p>Contacter moi pour plus d'information.</p>
              <br />
            </div>
          </div>
          <div className="flex-container">
            <br />
            <h3 className="right">Reiki :</h3><p>C'est ma porte d'entrée dans ce monde de la relaxation de l'écoute. Permet des effets inattendus, permet une bonne introduction en début de séance ou même pour la terminer. Un bon moyen d'atteindre un état de relaxation profond. S'utilise aussi en séance complète, même si ce n'est pas pour tout le monde.</p>
            <br />
            <h3 className="right">Massage des Fascias :</h3><p>Après plusieurs formations sur l'anatomie et l'importance des fascias, c'est quelque chose que j'affectionne pour relâcher les tensions excessives et permettre au corps de regagner une certaine sérénité. Les fascias connectent tous notre corps, des pieds à la tête et passant par les organes. Il est donc essentiel pour moi de les considérer et de leur apporter le soin qu'ils méritent.</p>
            <br />
            <h3 className="right">Massage à l'huile :</h3><p>Permet un profond relâchement, grâce au mouvement ample et long que peux apporter quelques gouttes d'huile lors d'un massage. Si vous êtes du genre à vous crisper, une bonne huile de massage et beaucoup de temps, voilà le combo idéal pour vous aider à oublier vos soucis.</p>
            <br />
            <h4>À vous de choisir</h4>
            <p>En fonction de vos envies et de vos besoins, je peux tout à fait mélanger ces trois pratiques. Où vous pouvez vous dédier complètement à l'une où l'autre.</p>
          </div>
        </li>
      </ul>
      <div className="flex-container">
        {domLoaded && (
          <a className="link" href={`mailto:${MAIL}`}>
            <button>Réserver par mail</button>
          </a>
        )}
        {/* {domLoaded && (
          <a className="link" href={`tel:${PHONE}`}>
            <button>Réserver par téléhone</button>
          </a>
        )} */}
      </div>
      <br />
    </div>
  )
}
export default MassageExplanation;