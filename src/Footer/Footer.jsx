// Style
import "./Footer.css"
// Imaages
import FooterImg from "../assets/logo-white.png"
import Twitter from "../assets/twitter.png"
import Instagram from "../assets/instag.png"
import Facebook from "../assets/facebook.png"


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-ctn">
                <img src={FooterImg} alt="" />

                <div className="socials">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Twitter} alt="" />
                </div>

                <div className="footer-menu">
                    <div>
                        <h4>Community</h4>
                        <ul>
                            <li>NFT</li>
                            <li>Tokens</li>
                            <li>Landlords</li>
                            <li>Discard</li>
                        </ul>
                    </div>
                    <div>
                       <h4>Places</h4>
                        <ul>
                            <li>Castle</li>
                            <li>Farms</li>
                            <li>Beach</li>
                            <li>Learn more</li>
                        </ul>
                    </div>

                    <div>
                        <h4>About us</h4>
                        <ul>
                            <li>Road map</li>
                            <li>Creators</li>
                            <li>Career</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </div>

          <div className="copyright">&copy; 2022 Metabnb</div>
        </div>
    )
}