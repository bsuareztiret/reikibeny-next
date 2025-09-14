import Image from "next/image";
import { PATH } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header flex-container" >
      <div className="header-text">
        <h2 >"La personne la plus importante dans votre vie c'est vous-même. Sans énergie pour soi, il est impossible d'être présent pour les autres."</h2>
        <p >Didier Dom</p>
      </div>
      <Image src={`${PATH}/documents/img/shooting/AM_039.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-AM_039.jpeg`} alt="close up hands" />
    </div>
  )
}
export default Header;