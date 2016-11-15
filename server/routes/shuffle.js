var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    
    var deck = req.body;

    //shuffle code goes here

    res.send(deck);

});

module.exports = router;
