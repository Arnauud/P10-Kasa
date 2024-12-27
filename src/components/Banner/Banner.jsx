import bannerImage from "../../assets/backgroundBanner.png"

function Banner (){
    return (
        <div className="banner-section">
            <img className="banner-background-img" src={bannerImage} alt="Banner Background" />
            <div className="banner-title break-text">
                Chez vous,
                partout et ailleurs
            </div>
        </div>
    )
}
export default Banner