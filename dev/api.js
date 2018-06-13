const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const uuid = require('uuid/v1')

const nodeAddress = uuid().split('-').join('');

const Blockchain = require('./blockchain.js')
const bticoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/blockchain', function(req,res){
    res.send(bticoin);
});

app.post('/transaction', function(req,res){
    const blockIndex = bticoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient, req.body.metanote);
    res.json({note: `Transaction will be added in block ${blockIndex}`});
});

app.get('/mine', function(req,res){
    const lastBlock = bticoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    
    const currentBlockData = {
        transactions : bticoin.pendingTransactions,
        index: lastBlock['index'] + 1
    };

    const nonce = bticoin.proofOfWork(previousBlockHash, currentBlockData);

    const blockHash = bticoin.hashBlock(previousBlockHash, currentBlockData, nonce);

    bticoin.createNewTransaction(12.5, "00", nodeAddress);

    const newBlock = bticoin.createNewBlock(nonce, previousBlockHash, blockHash);

    res.json({
        note: "New block mined",
        block: newBlock
    });
});

app.listen(3000,function() {
    console.log("Listening on port 3000")
});