import react from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import './style.css'
import {
    getTotalAmountFunded,
    donate
} from "./util/interact";
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);


const Home = ({walletAddress, status}) => {

    const [funds, setFunds] = useState([]);
    const [ethAmountToSend, setEthAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [message, setMessage] = useState('');

    useLayoutEffect(() => {
        const getTotalAmount = async () => {
            const total = await getTotalAmountFunded();
            setTotalAmount(parseFloat(web3.utils.fromWei(total.toString(), 'ether')).toFixed(2));
        }
        getTotalAmount();
    }, []);

    const handleInputChange = (e) => {
        setEthAmount(e.target.value);
    };

    const handleDonate = async () => {
        const weiValue = web3.utils.toWei(ethAmountToSend.toString(), 'ether');
        console.log(weiValue);
        const hash = await donate(walletAddress, weiValue);
        console.log(hash);
        setEthAmount(0);
        setMessage("");
    };

    const handleDisconnect = async () => {

    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (

        <div className="root">
            <div className="content">
                <div className="content-main-text">
                    Fund Us Project
                </div>
                <div className="content-sub-text">
                    This project is developed for learning purposes</div>
                <div className="content-sub-text"> 
                    by onuruci and tunahandundar.
                </div>
                <div className="content-sub-text">The contract of this project runs on Ethereum Ropsten test chain. Main purpose of the contract is to
                    collect funds and let the admin to withdraw those funds or give admin status to some else.
                    You can test this project by sending us Ropsten ETH :).
                </div>

                <div className="statistics-section">
                    <div className="box box-1">
                        <div className="change">
                            +
                        </div>
                        <div className="centered-main">
                            <div className="amount">
                                {totalAmount} ETH
                            </div>
                            <div className="explainment">
                                Total Funded
                            </div>
                        </div>
                    </div>
                    <div className="box box-2" >
                        <div className="change">
                            +/- 5%
                        </div>
                        <div className="centered-main">
                            <div className="amount">
                                100 ETH
                            </div>
                            <div className="explainment">
                                Aim
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="input-section">
                <div className="info-div">
                    <div>Wallet:  {walletAddress}</div>
                     <div>Status:  {status}</div>
                </div>
                <div className="donate-section">
                    <input type="number" value={ethAmountToSend} onChange={e => handleInputChange(e)}/>
                    <input type="text" value={message} placeholder = "message" onChange={e => handleMessageChange(e)} />
                    <button className="donate-button" onClick={handleDonate}>Donate</button>
                </div>
            </div>
        </div>
    );
};

export default Home