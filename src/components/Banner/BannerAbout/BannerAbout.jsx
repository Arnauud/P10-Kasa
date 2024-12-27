import bannerAboutImage from "../../../assets/bannerAbout.png"

function BannerAbout (){
    return (
        <div className="banner-section">
            <img className="banner-background-img" src={bannerAboutImage} alt="Banner Background" />
        </div>
    )
}
export default BannerAbout
