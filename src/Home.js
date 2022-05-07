import react from "react";
import { useState, useEffect, useLayoutEffect } from "react";
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
    }, []);

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
        <div>
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

        </div>
    );
};

export default Home