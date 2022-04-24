const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'FDF3DFOf999', 'DKJF94FF0994');
bitcoin.createNewBlock(111, 'SDKFJ8484K', 'KDKD93K99DK');
bitcoin.createNewBlock(2899, 'FF993FF9', 'FKF000KK');

bitcoin.getLastBlock();

console.log(bitcoin);
console.log(bitcoin.getLastBlock());
