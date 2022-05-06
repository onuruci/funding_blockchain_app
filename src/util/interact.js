require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require("../contract-abi.json");
const contractAddress = "0x99A4011f1C715dcCdd1Ae7B9C0c94BBCF183cDDb";


export const fundMeContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);


export const getTotalAmountFunded = async () => {
    const totalAmount = await fundMeContract.methods.getTotalAmount().call();
    console.log('Total: ',totalAmount);
    return totalAmount;
};

export const donate = async (address, value) => {
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    value: parseInt(value).toString(16),
    data: fundMeContract.methods.fund("hello").encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    console.log(txHash);
    return {
      status: " Once the transaction is verified by the network, the message will be updated automatically.",
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }
};

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
          const addressArray = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const obj = {
            status: "👆🏽 Write a message in the text-field above.",
            address: addressArray[0],
          };
          return obj;
        } catch (err) {
          return {
            address: "",
            status: "😥 " + err.message,
          };
        }
      } else {
        return {
          address: "",
          status: (
            <span>
              <p>
                {" "}
                🦊{" "}
                <a target="_blank" href={`https://metamask.io/download.html`}>
                  You must install Metamask, a virtual Ethereum wallet, in your
                  browser.
                </a>
              </p>
            </span>
          ),
        };
      }
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
          const addressArray = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (addressArray.length > 0) {
            return {
              address: addressArray[0],
              status: "👆🏽 Write a message in the text-field above.",
            };
          } else {
            return {
              address: "",
              status: "🦊 Connect to Metamask using the top right button.",
            };
          }
        } catch (err) {
          return {
            address: "",
            status: "😥 " + err.message,
          };
        }
      } else {
        return {
          address: "",
          status: (
            <span>
              <p>
                {" "}
                🦊{" "}
                <a target="_blank" href={`https://metamask.io/download.html`}>
                  You must install Metamask, a virtual Ethereum wallet, in your
                  browser.
                </a>
              </p>
            </span>
          ),
        };
      }
};