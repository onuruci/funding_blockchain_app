import react from "react";
import { Router, Link } from "react-router-dom";

import webIcon from './decentralized.png'
import './style.css'

const Nav = ({walletAddress, handleConnect}) => {
    return(
        <div className="footer">
            <div className="left-side">
                <Link to={process.env.PUBLIC_URL +'/'} className="linker">
                    <div className="main-tab">
                        <img src={webIcon} className="main-icon" alt="main-icon"></img>
                        <div className="main-tab-text">
                            Fund Us
                        </div>
                    </div>
                </Link>
                <Link to={process.env.PUBLIC_URL +'/admin/'} className="linker">
                    <button className="left-tab">
                        Admin Page
                    </button>
                </Link>
                <Link to={process.env.PUBLIC_URL +'/funds'} className="linker">
                    <button className="left-tab">
                        View Earlier Donations
                    </button>
                </Link>
            </div>

            {
                walletAddress !== "" ? <div className="right-side">
                    <button className="right-tab">
                        Wallet Connected {walletAddress.slice(0,8)}...
                    </button>
                </div> :
                <div className="right-side">
                    <button className="right-tab" onClick={handleConnect}>
                        Connect Wallet
                    </button>
                </div>
            }

        </div>
    );
};

export default Nav;