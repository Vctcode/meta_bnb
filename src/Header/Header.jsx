// Style
import './Header.css'
// Images
import HeaderImage from "../assets/header-image.png"

export default function Header() {
    return (
        <div className="header">
            <div className="header-text">
                <h1>Rent a <span className="colored">Place</span> away from <span className="colored">Home</span> in the <span className="colored">Metaverse</span></h1>

                <p>
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn yout imagination to reality at your comfort zone
                </p>

                <div className="search">
                    <input type="search" name="search" placeholder="Search for location" id="search_location" />
                    <a className="search-btn" href="#">Search</a>
                </div>
            </div>

            <div className='header-box'>
                <div className="header-imgs one">

                    <img src={HeaderImage} alt="" />

                </div>
            </div>
        </div>
    )
}