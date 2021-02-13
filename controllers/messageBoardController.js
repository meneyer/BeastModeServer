// const messageboard = require('../models/messageBoard')

const router = require('express').Router();
const User = require('../db').import('../models/messageboard');


// router.get('/', function (req, res){
//     res.send("Get all messages")
// })

router.post('/create', function (req, res) {
    MessageBoard.create({
        name:req.body.messageboard.name,
        email:req.body.messageboard.email,
        raceName:req.body.messageboard.raceName,
        message:req.body.messageboard.message        
    })
    .then(
        function messageCreated(messageboard){
            res.json({
                messageboard:messageboard
            })
        }
    )
    .catch(err => res.status(500).json({error:err}))
});

module.exports = router;