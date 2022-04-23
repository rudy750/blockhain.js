function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce, //proof of work number
    hash,
    previousBlockHash
  };
  //clear it out to start over for new block
  this.newTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};
