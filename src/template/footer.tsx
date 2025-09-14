import Image from "next/image";
import { MAIL, PATH, PHONE } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="floor-roof list pad">
      <div className="always-two-columns">
        <Image src={`${PATH}/documents/img/1.png`} width={400} height={400} alt="logo" />
        <h2>Contact</h2>
        <a href="https://www.instagram.com/reikibeny/"><Image src={`${PATH}/documents/img/contact/insta-contact-size.png`} width={25} height={25} alt="pictogram instagram" /></a>
        <a href={`mailto:${MAIL}`}><Image src={`${PATH}/documents/img/contact/mail-contact-size.png`} width={25} height={25} alt="pictogram mail" /></a>
      </div>
    </footer>
  )
}
export default Footer;