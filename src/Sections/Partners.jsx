// Style
import "./Partners.css"
// Images
import MbtImg from "../assets/mbtoken.png"
import MetamaskImg from "../assets/metamask.png"
import OpenSeaImg from "../assets/opensea.png"

export default function Partners() {
    return (
        <div className="section1">
            <div className="images">
                <img src={MbtImg} alt="Mbtoken image" />
                <img src={MetamaskImg} alt="Metamask image" />
                <img src={OpenSeaImg} alt="Opensea image" />
            </div>
        </div>
    )
}