import { useState } from "react";
import { Link } from "react-router-dom"
// Style
import "./Navbar.css"
// Images
import LogoImg from "../assets/logo.png"
import ConnectWallet from "../ConnectWallet/ConnectWallet";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const showMenu = () => {
        setMenu(!menu);
    }



    return (
        <nav className="nav">
            <div className="nav-img">
                <img
                    src={LogoImg}
                    alt="metabnb_logo" />
            </div>

            <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>

                </li>

                <li>
                    <Link to="/place">Place to stay</Link>

                </li>


                <li>
                    <Link>NFT</Link>

                </li>

                <li>
                    <Link>Community</Link>

                </li>
            </ul>


            <a className="nav-btn" onClick={togglePopup}>Connect wallet</a>


            {!menu && <div className="mobile">
                <ul className="nav-list">
                    <li>
                        <Link to="/">Home</Link>

                    </li>

                    <li>
                        <Link to="/place">Place to stay</Link>

                    </li>


                    <li>
                        <Link>NFT</Link>

                    </li>

                    <li>
                        <Link>Community</Link>

                    </li>
                </ul>


                <a className="nav-btn" onClick={togglePopup}>Connect wallet</a>
            </div>}

            {isOpen &&
                <ConnectWallet
                    handleClose={togglePopup} />
            }

            <div className="harm-menu" onClick={showMenu}>
                <div className="bar"></div>
            </div>
        </nav>
    )
}