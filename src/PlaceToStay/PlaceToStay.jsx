import { Link } from "react-router-dom"
// Style
import "./PlaceToStay.css"
// Components
import Card from "../Card/Card"
import Filter from "../Filter/Filter"
// Images
import NFTImg1 from "../assets/nft1.png"
import NFTImg2 from "../assets/nft2.png"
import NFTImg3 from "../assets/nft3.png"
import NFTImg4 from "../assets/nft4.png"
import NFTImg5 from "../assets/nft5.png"
import NFTImg6 from "../assets/nft6.png"
import NFTImg7 from "../assets/nft7.png"
import NFTImg8 from "../assets/nft8.png"
import NFTImg9 from "../assets/nft9.png"
import NFTImg10 from "../assets/nft10.png"
import NFTImg11 from "../assets/nft11.png"
import NFTImg12 from "../assets/nft12.png"
import NFTImg13 from "../assets/nft13.png"
import NFTImg14 from "../assets/nft14.png"
import NFTImg15 from "../assets/nft15.png"
import NFTImg16 from "../assets/nft16.png"



export default function Place() {
    return (
        <div className="place">

            <Filter />

            <div className="card-ctn">
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
                    img={NFTImg9}
                />


                <Card
                    img={NFTImg10}
                />


                <Card
                    img={NFTImg11}
                />


                <Card
                    img={NFTImg12}
                />


                <Card
                    img={NFTImg13}
                />


                <Card
                    img={NFTImg14}
                />


                <Card
                    img={NFTImg15}
                />


                <Card
                    img={NFTImg16}
                />
            </div>
        </div>
    )
}