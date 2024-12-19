import Image from "next/image";
import { PATH } from "../../utils/constants";

const Gallery = () => {
  return (
    <a className="link" href={`${PATH}/gallery`}>
      <div className="card">
        <h2>Galerie</h2>
        <div className="gallery">
          <div className="gallery-item"><Image src={`${PATH}/documents/img/shooting/pm_05.JPG`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-pm_05.JPG`} alt="foot massage" /></div>
          <div className="gallery-item"><Image src={`${PATH}/documents/img/shooting/pm_07.JPG`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-pm_07.JPG`} alt="reiki on the knee" /></div>
          <div className="gallery-item"><Image src={`${PATH}/documents/img/shooting/pm_13.jpeg`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-pm_13.jpeg`} alt="feet massage, view from back" /></div>
          <div className="gallery-item"><Image src={`${PATH}/documents/img/shooting/pm_10.JPG`} width={2000} height={2000} placeholder="blur" blurDataURL={`${PATH}/documents/img/fast-loading/lc-pm_10.JPG`} alt="the back massage is the best" /></div>
        </div>
      </div>
    </a>
  )
}
export default Gallery;