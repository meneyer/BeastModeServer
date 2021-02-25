// let express = require("express");
// let router = express.Router();
const router = require('express').Router();
const validateSession = require('../middleware/validate-session');
const EventInfo = require('../db').import('../models/event')

//TEST ENDPOINT
// router.get('/', function (req, res){
//     res.send("Get all user events")
// })

//CREATE AN EVENT - events/create
router.post('/create', validateSession, function (req, res) {
    const eventItems = {
        raceName:req.body.events.raceName,
        location:req.body.events.location,
        length: req.body.events.length,
        date:req.body.events.date,
        startTime:req.body.events.startTime,
        packList:req.body.events.packList,
        lodging:req.body.events.lodging,
        travelPlan:req.body.events.travelPlan,
        owner: req.user.id  
    }
    EventInfo.create(eventItems)
    .then(eventItems => res.status(200).json(eventItems))   
    .catch(err => res.status(500).json({error:err}))
});

//GET ALL EVENTS FROM EVERYONE - events/
//     router.get('/', function(req,res){
//     EventInfo.findAll()
//         .then((allEvents) => res.status(200).json(allEvents))
//         .catch((err) => res.status(500).json({error:err}))
// })

//this has to either be the one above or below

// GET ALL EVENTS FROM ONE SPECIFIC USER - events/_______
router.get('/', validateSession, function(req,res){
        let userid = req.user.id
        EventInfo.findAll({
            where: {owner: userid}
        })
            .then((allEvents) => res.status(200).json(allEvents))
            .catch((err) => res.status(500).json({error:err}))
    })

router.get('/ascdate', validateSession, function(req,res){
    let userid = req.user.id
    EventInfo.findAll({
        where: {owner: userid},
        order: [['date', 'ASC']],
        limit: 3
    })
        .then((allEvents) => res.status(200).json(allEvents))
        .catch((err) => res.status(500).json({error:err}))
})

//UPDATE AN EVENT - events/update/id
router.put('/update/:travelPlanId', validateSession, function (req, res){
    const updateEventInfo = {
        raceName:req.body.events.raceName,
        location:req.body.events.location,
        length: req.body.events.length,
        date:req.body.events.date,
        startTime:req.body.events.startTime,
        packList:req.body.events.packList,
        lodging:req.body.events.lodging,
        travelPlan:req.body.events.travelPlan,
        owner: req.user.id
    };

    const query = {where: {id: req.params.travelPlanId, owner: req.user.id}};

    EventInfo.update(updateEventInfo, query)
    .then((events) => res.status(200).json(events))
    .catch((err) => res.status(500).json({error:err}))
});

//DELETE AN EVENT - events/delete/id
router.delete('/delete/:id', validateSession, function(req, res) {
    const query = {where: {id: req.params.id, owner: req.user.id}};

    EventInfo.destroy(query)
    .then(() => res.status(200).json({message: "This event has been removed"}))
    .catch((err) => res.status(500).json({error:err}));
});

module.exports = router