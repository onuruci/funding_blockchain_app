(this.webpackJsonpfunding_blockchain_app=this.webpackJsonpfunding_blockchain_app||[]).push([[0],{125:function(e,t,n){},240:function(e,t,n){},258:function(e,t){},261:function(e,t){},264:function(e,t){},268:function(e,t){},295:function(e,t){},297:function(e,t){},306:function(e,t){},308:function(e,t){},318:function(e,t){},320:function(e,t){},436:function(e,t){},438:function(e,t){},445:function(e,t){},446:function(e,t){},547:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"funderAddr","type":"address"},{"internalType":"uint256","name":"fundAmount","type":"uint256"},{"internalType":"string","name":"fundMessage","type":"string"}],"indexed":false,"internalType":"struct FundMe.Fund[]","name":"","type":"tuple[]"}],"name":"funded","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"fund","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"funds","outputs":[{"internalType":"address","name":"funderAddr","type":"address"},{"internalType":"uint256","name":"fundAmount","type":"uint256"},{"internalType":"string","name":"fundMessage","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFunds","outputs":[{"components":[{"internalType":"address","name":"funderAddr","type":"address"},{"internalType":"uint256","name":"fundAmount","type":"uint256"},{"internalType":"string","name":"fundMessage","type":"string"}],"internalType":"struct FundMe.Fund[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},548:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),r=n(222),c=n.n(r),i=(n(240),n(20)),u=n(19),o=n(12),l=n.n(o),d=n(47),p=n(11),h=(n(125),n(3));n(70).config();var b=(0,n(120).createAlchemyWeb3)("wss://eth-ropsten.alchemyapi.io/v2/4sNjEwmjAaU9iPoWaxPhDo-J-Dx4cXA4"),m=n(547),j="0x99A4011f1C715dcCdd1Ae7B9C0c94BBCF183cDDb",f=new b.eth.Contract(m,j),x=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.methods.getTotalAmount().call();case 2:return t=e.sent,console.log("Total: ",t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.methods.getBalance().call();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={to:j,from:t,data:f.methods.withdraw().encodeABI()},e.prev=1,e.next=4,window.ethereum.request({method:"eth_sendTransaction",params:[n]});case 4:return a=e.sent,console.log(a),e.abrupt("return",{status:" Once the transaction is verified by the network, the message will be updated automatically."});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{status:"\ud83d\ude25 "+e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={to:j,from:t,value:parseInt(n).toString(16),data:f.methods.fund("hello").encodeABI()},e.prev=1,e.next=4,window.ethereum.request({method:"eth_sendTransaction",params:[a]});case 4:return s=e.sent,console.log(s),e.abrupt("return",{status:" Once the transaction is verified by the network, the message will be updated automatically."});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{status:"\ud83d\ude25 "+e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"\ud83d\udc46\ud83c\udffd You can send ropsten ether",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",{address:"",status:Object(h.jsx)("span",{children:Object(h.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(h.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:"\ud83d\udc46\ud83c\udffd You can send some ropsten ether"});case 9:return e.abrupt("return",{address:"",status:"\ud83e\udd8a Connect to Metamask using the top right button."});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(h.jsx)("span",{children:Object(h.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(h.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();n(70).config();var k=(0,n(120).createAlchemyWeb3)("wss://eth-ropsten.alchemyapi.io/v2/4sNjEwmjAaU9iPoWaxPhDo-J-Dx4cXA4"),N=function(e){var t=e.walletAddress,n=e.status,s=Object(a.useState)([]),r=Object(u.a)(s,2),c=(r[0],r[1],Object(a.useState)(0)),o=Object(u.a)(c,2),d=o[0],p=o[1],b=Object(a.useState)(0),m=Object(u.a)(b,2),j=m[0],f=m[1],v=Object(a.useState)(""),y=Object(u.a)(v,2),w=y[0],g=y[1];Object(a.useLayoutEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,f(parseFloat(k.utils.fromWei(t.toString(),"ether")).toFixed(2));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var N=function(){var e=Object(i.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k.utils.toWei(d.toString(),"ether"),console.log(n),e.next=4,O(t,n);case 4:a=e.sent,console.log(a),p(0),g("");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"root",children:[Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("div",{className:"content-main-text",children:"Fund Us Project"}),Object(h.jsx)("div",{className:"content-sub-text",children:"This project is developed for learning purposes"}),Object(h.jsx)("div",{className:"content-sub-text",children:"by onuruci and tunahandundar."}),Object(h.jsx)("div",{className:"content-sub-text",children:"The contract of this project runs on Ethereum Ropsten test chain. Main purpose of the contract is to collect funds and let the admin to withdraw those funds or give admin status to some else. You can test this project by sending us Ropsten ETH :)."}),Object(h.jsxs)("div",{className:"statistics-section",children:[Object(h.jsxs)("div",{className:"box box-1",children:[Object(h.jsx)("div",{className:"change",children:"+"}),Object(h.jsxs)("div",{className:"centered-main",children:[Object(h.jsxs)("div",{className:"amount",children:[j," ETH"]}),Object(h.jsx)("div",{className:"explainment",children:"Total Funded"})]})]}),Object(h.jsxs)("div",{className:"box box-2",children:[Object(h.jsx)("div",{className:"change",children:"+/- 5%"}),Object(h.jsxs)("div",{className:"centered-main",children:[Object(h.jsx)("div",{className:"amount",children:"100 ETH"}),Object(h.jsx)("div",{className:"explainment",children:"Aim"})]})]})]})]}),Object(h.jsxs)("div",{className:"input-section",children:[Object(h.jsxs)("div",{className:"info-div",children:[Object(h.jsxs)("div",{children:["Wallet:  ",t]}),Object(h.jsxs)("div",{children:["Status:  ",n]})]}),Object(h.jsxs)("div",{className:"donate-section",children:[Object(h.jsx)("input",{type:"number",value:d,onChange:function(e){return function(e){p(e.target.value)}(e)}}),Object(h.jsx)("input",{type:"text",value:w,placeholder:"message",onChange:function(e){return function(e){g(e.target.value)}(e)}}),Object(h.jsx)("button",{className:"donate-button",onClick:N,children:"Donate"})]})]})]})};n(70).config();var A=(0,n(120).createAlchemyWeb3)("wss://eth-ropsten.alchemyapi.io/v2/4sNjEwmjAaU9iPoWaxPhDo-J-Dx4cXA4"),T=function(e){var t=e.walletAddress,n=(e.status,Object(a.useState)(0)),s=Object(u.a)(n,2),r=s[0],c=s[1];Object(a.useLayoutEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,c(parseFloat(A.utils.fromWei(t.toString(),"ether")).toFixed(2));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var o=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Wallet Address:   ",t),e.next=3,y(t);case 3:n=e.sent,console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Admin Page"}),Object(h.jsxs)("h1",{children:["Balance : ",r," "]}),Object(h.jsx)("button",{onClick:o,children:"Withdraw Funds"})]})},_=n.p+"static/media/decentralized.a67394cf.png",M=function(e){var t=e.walletAddress,n=e.handleConnect;return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsxs)("div",{className:"left-side",children:[Object(h.jsx)(d.b,{to:"/funding_blockchain_app/",className:"linker",children:Object(h.jsxs)("div",{className:"main-tab",children:[Object(h.jsx)("img",{src:_,className:"main-icon",alt:"main-icon"}),Object(h.jsx)("div",{className:"main-tab-text",children:"Fund Us"})]})}),Object(h.jsx)(d.b,{to:"/funding_blockchain_app/admin/",className:"linker",children:Object(h.jsx)("button",{className:"left-tab",children:"Admin Page"})}),Object(h.jsx)(d.b,{to:"/funding_blockchain_app/funds",className:"linker",children:Object(h.jsx)("button",{className:"left-tab",children:"View Earlier Donations"})})]}),""!==t?Object(h.jsx)("div",{className:"right-side",children:Object(h.jsxs)("button",{className:"right-tab",children:["Wallet Connected ",t.slice(0,8),"..."]})}):Object(h.jsx)("div",{className:"right-side",children:Object(h.jsx)("button",{className:"right-tab",onClick:n,children:"Connect Wallet"})})]})},F=function(){return Object(h.jsxs)("div",{children:["Funds",Object(h.jsx)("h1",{children:"FUNDS"})]})};n(70).config();var C=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),c=Object(u.a)(r,2),o=c[0],b=c[1];Object(a.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,n=t.address,a=t.status,s(n),b(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var m=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=w(),n=t.address,a=t.status,s(n),b(a);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(M,{walletAddress:n,handleConnect:m}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{path:"/funding_blockchain_app/",element:Object(h.jsx)(N,{walletAddress:n,status:o})}),Object(h.jsx)(p.a,{path:"/funding_blockchain_app/admin/",element:Object(h.jsx)(T,{walletAddress:n,status:o})}),Object(h.jsx)(p.a,{path:"/funding_blockchain_app/funds/",element:Object(h.jsx)(F,{})})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,552)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),S()}},[[548,1,2]]]);
//# sourceMappingURL=main.8dd94e9b.chunk.js.map