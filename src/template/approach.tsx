import Image from "next/image";
import { PATH } from "../../utils/constants";

const Approach = () => {
  return (
    <div className="card">
      <ul className="list">
        <li className="split">
          <Image src={`${PATH}/documents/img/shooting/ab_03.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-ab_03.jpeg`} alt="profil picture" />
          <div className="flex-container">
            <h2>Mon approche</h2>
            <p>
              En tant que praticien Reiki, je m'engage à offrir bien plus qu’un simple soin : un véritable moment d’écoute et de recentrage. Inspiré par une vision holistique du bien-être, je considère chaque individu comme une entité unique où le corps, l’esprit et les émotions sont intimement liés. Mon approche, à la fois intuitive et structurée, s'appuie sur l'énergie vitale pour accompagner chacun dans sa quête d'équilibre, de sérénité et de mieux-être.
            </p>
            <br />
            <p>
              Comme un jardinier qui aide une plante à trouver son plein potentiel, je crée un environnement propice à votre épanouissement, en guidant l'énergie là où elle est nécessaire, sans jamais forcer. Mon objectif est de vous permettre de vous reconnecter à vos propres ressources, afin de révéler la vitalité et la sagesse qui sommeillent en vous. Chaque séance est une invitation à ralentir, à écouter votre corps, et à vous offrir un espace de paix pour grandir à votre rythme.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Approach;