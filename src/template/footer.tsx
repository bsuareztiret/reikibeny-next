import Image from "next/image";
import { PATH } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="floor-roof list pad">
      <div className="always-two-columns">
        <Image src={`${PATH}/documents/img/1.png`} width={400} height={400} alt="logo" />
        <h2>Contact</h2>
      </div>
      <p>J'exerce dans la région de Bruxelles.</p>
      <p>Vous pouvez me suivre instagram: <a href="https://www.instagram.com/reikibeny/">ReikiBeny</a>.</p>
      <p>Vou pouvez me contacter par mail: <a href="mailto:benyreiki@mail.be">ici</a>.</p>
    </footer>
  )
}
export default Footer;