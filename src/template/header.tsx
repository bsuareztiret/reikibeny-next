import Image from "next/image";

const Header = () => {
  return (
    <div className="header flex-container" >
      <div className="header-text">
        <h2 >"La personne la plus importante dans votre vie c'est vous-même. Sans énergie pour soi, il est impossible d'aider les autres."</h2>
        <p >Didier Dom</p>
      </div>
      <Image src="/documents/img/shooting/pm_04.JPG" width={2000} height={2000} blurDataURL="/documents/img/fast-loading/lc-pm_04.JPG" alt="close up hands" />
    </div>
  )
}
export default Header;