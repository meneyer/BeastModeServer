// let express = require('express');
// let router = express.Router();
const router = require('express').Router();
let validateSession = require('../middleware/validate-session');
const MessageBoard = require('../db').import('../models/messageBoard')

//TEST ENDPOINT
// router.get('/', function (req, res){
//     res.send("Get all messages")
// })

//CREATE A MESSAGE - messageboard/create
router.post('/create', validateSession, function (req, res) {
    const messageBoardPost = {
        name:req.body.messageboard.name,
        email:req.body.messageboard.email,
        raceName:req.body.messageboard.raceName,
        message:req.body.messageboard.message,
        owner: req.user.id       
    }
    MessageBoard.create(messageBoardPost)
    .then(messageBoardPost => res.status(200).json(messageBoardPost))   
    .catch(err => res.status(500).json({error:err}))
});

// GET ALL MESSAGES FROM EVERYONE - messageboard/
router.get('/', function(req,res){
    MessageBoard.findAll()
        .then((allMessages) => res.status(200).json(allMessages))
        .catch((err) => res.status(500).json({error:err}))
})

// GET ALL MESSAGES FROM ONE SPECIFIC USER - messageboard/yours
router.get('/yours', validateSession, function(req,res){
    let userid = req.user.id
    MessageBoard.findAll({
        where: {owner: userid}
    })
        .then((allEvents) => res.status(200).json(allEvents))
        .catch((err) => res.status(500).json({error:err}))
})

// UPDATE A MESSAGE - messageboard/update/id
router.put('/update/:messageId', validateSession, function (req, res){
        const updateMessage = {
            name:req.body.messageboard.name,
            email:req.body.messageboard.email,
            raceName:req.body.messageboard.raceName,
            message:req.body.messageboard.message,
            owner: req.user.id
        };
    
        const query = {where: {id: req.params.messageId, owner: req.user.id}};
    
        MessageBoard.update(updateMessage, query)
        .then((messages) => res.status(200).json(messages))
        .catch((err) => res.status(500).json({error:err}))
    });

//DELETE A MESSAGE - messageboard/delete/id
router.delete('/delete/:id', validateSession, function(req, res) {
    const query = {where: {id: req.params.id, owner: req.user.id}};

    MessageBoard.destroy(query)
    .then(() => res.status(200).json({message: "This message has been removed"}))
    .catch((err) => res.status(500).json({error:err}));
});

module.exports = router;