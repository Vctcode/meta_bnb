// Style
import "./Card.css"
// Images
import HeartImg from "../assets/heart.png"
import RatingImg from "../assets/rating-stars.png"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img className="nft" src={`${props.img}`} alt="" />
                <img className="heart" src={HeartImg} alt="" />
            </div>

            <div className="info1">
                <span>Desert king</span>
                <span className="cost">1MBT per night</span>
            </div>

            <div className="info2">
                <span>2345km away</span>
                <span>available for 2weeks stay</span>
            </div>

            <div className="rating">
                <img src={RatingImg} alt="" />
            </div>
        </div>
    )
}