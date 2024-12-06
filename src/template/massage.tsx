import Image from "next/image";
import { PATH } from "../../utils/constants";

const Massage = () => {
  return (
    <a className="link" href={`${PATH}/massage`}>
      <div className="card">
        <ul className="list">
          <li className="split">
            <Image src={`${PATH}/documents/img/shooting/pmr_02.JPG`} width={2000} height={2000} blurDataURL={`${PATH}/documents/img/fast-loading/lc-pmr_02.JPG`} alt="hand massage picture" />
            <div className="flex-container">
              <h2>Massage-Reiki</h2>
              <p>Offrez-vous un moment unique de bien-être où détente physique et harmonie intérieure se rencontrent, grâce à un massage qui écoute votre corps autant que votre esprit.</p>
            </div>
          </li>
        </ul>
      </div>
    </a>
  )
}
export default Massage;