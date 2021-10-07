const Web3 = require ("web3");

const web3 = new Web3("HTTP://127.0.0.1:7545")
const address1 =  ('0x90234cABd66E35944Db99C21b694EBafB01fc55E')
const address2 = ('0x13a938bE2D9A663F82640e3E6a207C18339f6140')
// const web3 = ('HTTP://127.0.0.1:7545')

//balance checkkarre yaha ab
//yaha kitne bhi address add karke unka balance check kar sakty 

const chekBalance = async ()=> {
   const balance1 = web3.utils.fromWei( await web3.eth.getBalance(address1), 'ether');
   const balance2 = web3.utils.fromWei(await web3.eth.getBalance(address2), 'ether');
    console.log(`the available balance of ${address1} is :${balance1} ETH.`)
    console.log(` the available balance of ${address2} is : ${balance2} ETH. `)
}

chekBalance();