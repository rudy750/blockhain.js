const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', (req, res) => {
  res.send(bitcoin);
});

app.post('/transaction', (req, res) => {
  console.log(req.body);
  res.send(`transaction amount is  ${req.body.amount}`);
});

app.get('/mine', (req, res) => {});

app.listen(3000, () => console.log('listening on port 3000...'));
