// Style
import "./LearnMore.css"
// Images
import Framed from "../assets/framed-image.png"

export default function LearnMore() {
    return (
        <div className="section3">
            <div className="learn-more">
                <div className="lm-text">
                    <h4>Metabnb NFTs</h4>

                    <p>
                        Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                    </p>

                    <div className="btn">
                        <a href="#">Learn more</a>
                    </div>
                </div>

                <div className="image-ctn">
                   <img src={Framed} alt="" />
                </div>

            </div>
        </div>
    )
}