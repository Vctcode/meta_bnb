// Style
import "./ConnectWallet.css"
// Images
import Chevron from "../assets/chevron.svg"
import ExitIcon from "../assets/exit.svg"
import MetamaskIcon from "../assets/metamask-head.png"
import WalletConnect from "../assets/walletconnect.png"

export default function ConnectWallet(props) {
    return (
        <div className="connect-wallet">
            <div className="overlay">
                <div className="cnt">
                    <div className="cnt-header">
                        <h4>Connect Wallet </h4>
                        <img src={ExitIcon} alt="" onClick={props.handleClose} />
                    </div>

                    <span className="hr-rule"></span>

                    <h6>choose your preferred wallet:</h6>

                    <div className="link">
                        <img src={MetamaskIcon} alt="" />
                        <h5>Metamask</h5>
                        <img src={Chevron} alt="" />
                    </div>

                    <div className="link">
                        <img src={WalletConnect} alt="" />
                        <h5>WalletConnect</h5>
                        <img src={Chevron} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}