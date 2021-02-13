// const events = require('../models/event')

let express = require("express");
let router = express.Router();

// router.get('/', function (req, res){
//     res.send("Get all user events")
// })

router.post('/create', function (req, res) {
    Events.create({
        raceName:req.body.events.raceName,
        location:req.body.events.location,
        date:req.body.events.date,
        startTime:req.body.events.startTime,
        packList:req.body.events.packList,
        lodging:req.body.events.lodging,
        travelPlan:req.body.events.travelPlan
    })
    .then(
        function eventCreated(events) {
            res.json({
                events:events
            })
        }
    )
    .catch(err => res.status(500).json({error:err}))
});

module.exports = router