const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
//test genesis block
console.log(bitcoin.chain);

bitcoin.createNewBlock(2389, 'FDF3DFOf999', 'DKJF94FF0994');
bitcoin.createNewTransaction(100, 'ALEX89FDSDF99SF', 'JENKDKDF99DFK00DF');
bitcoin.createNewBlock(234234, '04FGFG99S00', 'DKSFJSDF999218SS');

bitcoin.createNewTransaction(50, 'ALEX89FDSDF99SF', 'JENKDKDF99DFK00DF');
bitcoin.createNewTransaction(300, 'ALEX89FDSDF99SF', 'JENKDKDF99DFK00DF');
bitcoin.createNewTransaction(2000, 'ALEX89FDSDF99SF', 'JENKDKDF99DFK00DF');
//mine another block to add transactions to chain

bitcoin.createNewBlock(9234234, 'ASDFASDF89AS8ASDF8', 'ASDF9ASDF82DS');

console.log(bitcoin);

//Hashblock test

const previousBlockHash = 'SDFSDFi23FSDF';
const currentBlockData = [
  { amount: 101, sender: 'SDFSDF999SDF', recipient: 'SDF09SDFSDF23' },
  { amount: 30, sender: 'SDFSDFO7778SDFS', recipient: 'JKNS9879SDF' },
  { amount: 200, sender: 'SDF09SDF676SDF', recipient: 'SDF88SDF&88SDF9' }
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

//proof of work test
console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 30469));
