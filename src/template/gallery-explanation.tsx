import Image from "next/image";

const GalleryExplanation = () => {
  return (
    <div className="card">
      <h2>Images</h2>
      <div className="gallery">
        <div className="gallery-item"><Image src="/documents/img/shooting/pm_02.JPG" width={2000} height={2000} blurDataURL="background-image: url(/documents/img/fast-loading/lc-pm_02.JPG)" alt="knee massage" /></div>
        <div className="gallery-item"><Image src="/documents/img/shooting/pm_03.JPG" width={2000} height={2000} blurDataURL="background-image: url(/documents/img/fast-loading/lc-pm_03.JPG)" alt="another hand massage" /></div>
        <div className="gallery-item"><Image src="/documents/img/shooting/pm_05.JPG" width={2000} height={2000} blurDataURL="background-image: url(/documents/img/fast-loading/lc-pm_05.JPG)" alt="foot massage" /></div>
        <div className="gallery-item"><Image src="/documents/img/shooting/pm_06.JPG" width={2000} height={2000} blurDataURL="background-image: url(/documents/img/fast-loading/lc-pm_06.JPG)" alt="back finisher massage" /></div>
        <div className="gallery-item"><Image src="/documents/img/shooting/pm_07.JPG" width={2000} height={2000} blurDataURL="background-image: url(/documents/img/fast-loading/lc-pm_07.JPG)" alt="reiki on the knee" /></div>
        <div className="gallery-item"><Image src="/documents/img/shooting/pm_08.JPG" width={2000} height={2000} blurDataURL="background-image: url(/documents/img/fast-loading/lc-pm_08.JPG)" alt="I love hand massage" /></div>
        <div className="gallery-item"><Image src="/documents/img/shooting/pm_09.JPG" width={2000} height={2000} blurDataURL="background-image: url(/documents/img/fast-loading/lc-pm_09.JPG)" alt="back massage" /></div>
        <div className="gallery-item"><Image src="/documents/img/shooting/pm_10.JPG" width={2000} height={2000} blurDataURL="background-image: url(/documents/img/fast-loading/lc-pm_10.JPG)" alt="the back massage is the best" /></div>
        <div className="gallery-item"><Image src="/documents/img/shooting/pm_11.JPG" width={2000} height={2000} blurDataURL="background-image: url(/documents/img/fast-loading/lc-pm_11.JPG)" alt="reiki on the back" /></div>
        <div className="gallery-item"><Image src="/documents/img/shooting/pm_12.JPG" width={2000} height={2000} blurDataURL="background-image: url(/documents/img/fast-loading/lc-pm_12.JPG)" alt="massage on the knee" /></div>
      </div>
    </div>
  )
}
export default GalleryExplanation;