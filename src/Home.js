import react from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import webIcon from './decentralized.png'
import './style.css'
import {
    connectWallet, 
    getCurrentWalletConnected,
    getTotalAmountFunded,
    donate
 } from "./util/interact";
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);


const Home = () => {

    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [funds, setFunds] = useState([]);
    const [ethAmountToSend, setEthAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [message, setMessage] = useState('');

    useLayoutEffect(() => {
        const walletConnection = async () => {
            const {address, status} = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);
        };
        const getTotalAmount = async () => {
            const total = await getTotalAmountFunded();
            setTotalAmount(total);
        }
        walletConnection();
        getTotalAmount();
    });

    const handleConnect = async () => {
        const {address, status} = connectWallet();
        setWallet(address);
        setStatus(status);
    };

    const handleInputChange = (e) => {
        setEthAmount(e.target.value);
    };

    const handleDonate = async () => {
        const weiValue = web3.utils.toWei(ethAmountToSend.toString(), 'ether');
        console.log(weiValue);
        const hash = await donate(walletAddress, weiValue);
        console.log(hash);
    };

    const handleDisconnect = async () => {

    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return(

        <>
        <div className= "footer">
            <div className="left-side">

                <div className="main-tab">
                    <img src={webIcon} className = "main-icon" alt="main-icon"></img>
                    <div className="main-tab-text">
                        Website Name
                    </div>
                    
                </div>

                <button className="left-tab">
                    Tab 1 Text
                </button>
                <button className="left-tab">
                    Tab 2 Text
                </button>
                <button className="left-tab left-tab-three">
                    Tab 3 Text
                </button>
                <button className="left-tab">
                    Tab 4 Text
                </button>


            </div>

            <div className="right-side">
                <button className="right-tab">
                    Log in
                </button>
                <button className="right-tab">
                    Sign up
                </button>
            </div>

        </div>

        <div className="content">
            <div className="content-main-text">
                Decentralized for a better tomorrow
            </div>
            <div className="content-sub-text">
                Buy something. Join and fund causes. Change the world!
            </div>

            <div>
                
            </div>

        </div>

        <div className="footer">


        </div>
        </>

        /*<div>
            <h1>Fund Us</h1>
            <h2>About fund us project</h2>
            <p>
                This project is developed for testing and learning purposes. Smart Contract
                runs on Ropsten Test Chain. You can send us Ropsten Eth to test the project. Thanks :).
            </p>
            <h3>
                COntract Address:  0x99A4011f1C715dcCdd1Ae7B9C0c94BBCF183cDDb
            </h3>
            <div>
                <div>You can use</div>
                <a href="https://ropsten.etherscan.io/">Ropsten Etherscan</a>
                <div> to view the contract code.</div>
            </div>
            <div>
                Total Amount Funded : {totalAmount}
            </div>
            <div>
                <input type="number" value={ethAmountToSend} onChange={e => handleInputChange(e)}/>
                <input type="text" value={message} onChange={e => handleMessageChange(e)} />
                <button onClick={handleDonate}>Donate</button>
            </div>
            <h1>Wallet:  {walletAddress}</h1>
            <h1>Status:  {status}</h1>
            <button onClick={handleConnect}>Connect</button>
            <button onClick={handleDisconnect}>Disconnect</button>

    </div>*/
    );
};

export default Home