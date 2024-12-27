import whiteLogo from "../../assets/whiteLogo.png"

function Footer (){
    return(
        <footer className="footer-section">
            <img className="footer-logo" src={whiteLogo} alt="Logo white footer" />
            <div className="footer-text">© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer