// Style
import "./Inspiration.css"
// Components
import Card from "../Card/Card"
// Images
import NFTImg1 from "../assets/nft1.png"
import NFTImg2 from "../assets/nft2.png"
import NFTImg3 from "../assets/nft3.png"
import NFTImg4 from "../assets/nft4.png"
import NFTImg5 from "../assets/nft5.png"
import NFTImg6 from "../assets/nft6.png"
import NFTImg7 from "../assets/nft7.png"
import NFTImg8 from "../assets/nft8.png"



export default function Inspiration() {
    return (
        <div className="section2">
            <h2>Inspiration for your next adventure</h2>

            <div className="card-ctn">
                <Card
                    img={NFTImg1}
                />

                <Card
                    img={NFTImg2}
                />

                <Card
                    img={NFTImg3}
                />

                <Card
                    img={NFTImg4}
                />

                <Card
                    img={NFTImg5}
                />

                <Card
                    img={NFTImg6}
                />

                <Card
                    img={NFTImg7}
                />

                <Card
                    img={NFTImg8}
                />
            </div>
        </div>
    )
}