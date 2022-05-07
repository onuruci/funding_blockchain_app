import react from "react";
import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AdminPage from "./AdminPage";
import Nav from "./Nav";
import Funds from './Funds';

import {
  getCurrentWalletConnected,
  connectWallet
} from "./util/interact";

require('dotenv').config();
const App = () => {

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const walletConnection = async () => {
        const { address, status } = await getCurrentWalletConnected();
        setWallet(address);
        setStatus(status);
    };
    walletConnection();
  }, []);

  const handleConnect = async () => {
    const { address, status } = connectWallet();
    setWallet(address);
    setStatus(status);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav walletAddress={walletAddress} handleConnect={handleConnect}/>
        <Routes>
          <Route path={process.env.PUBLIC_URL +'/'} element={<Home walletAddress={walletAddress} status={status}/>}/>
          <Route path={process.env.PUBLIC_URL +'/admin/'} element={<AdminPage wallet={walletAddress} status={status}/>} />
          <Route path={process.env.PUBLIC_URL +'/funds/'} element={<>Hii</>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
