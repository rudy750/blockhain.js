const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'FDF3DFOf999', 'DKJF94FF0994');
bitcoin.createNewTransaction(100, 'ALEX89FDSDF99SF', 'JENKDKDF99DFK00DF');
bitcoin.createNewBlock(234234, '04FGFG99S00', 'DKSFJSDF999218SS');

bitcoin.createNewTransaction(50, 'ALEX89FDSDF99SF', 'JENKDKDF99DFK00DF');
bitcoin.createNewTransaction(300, 'ALEX89FDSDF99SF', 'JENKDKDF99DFK00DF');
bitcoin.createNewTransaction(2000, 'ALEX89FDSDF99SF', 'JENKDKDF99DFK00DF');
//mine another block to add transactions to chain

bitcoin.createNewBlock(9234234, 'ASDFASDF89AS8ASDF8', 'ASDF9ASDF82DS');

console.log(bitcoin);
