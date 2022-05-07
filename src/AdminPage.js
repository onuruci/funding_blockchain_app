import react from "react"
import { useLayoutEffect, useState, useEffect } from "react";
import { getBalance, withdrawFunds } from "./util/interact";
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const AdminPage = ({walletAddress, status}) => {
    const [balance, setBalance] = useState(0);

    useLayoutEffect(()=>{
        const getAllBalance = async () => {
            const b = await getBalance();
            setBalance(parseFloat(web3.utils.fromWei(b.toString(), 'ether')).toFixed(2));
        };
        getAllBalance();
    }, []);

    const handleWithdraw = async () => {
        console.log("Wallet Address:   ", walletAddress);
        const hash = await withdrawFunds(walletAddress);
        console.log(hash);
    };

    return(
        <div>
            <h1>Admin Page</h1>
            <h1>Balance : {balance} </h1>
            <button onClick={handleWithdraw}>Withdraw Funds</button>
        </div>
    );
}


export default AdminPage;
