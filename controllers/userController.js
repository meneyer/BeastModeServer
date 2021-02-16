// const user = require('../models/user');

const router = require('express').Router();
const User = require('../db').import('../models/user');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// router.get('/', function (req, res){
//     res.send("Get all users")
// })

//CREATE A USER - user/create
router.post('/create', function (req, res) {
    User.create({
        email:req.body.user.email,
        password:bcrypt.hashSync(req.body.user.password, 11)
    })
    .then(
        function successfulCreation(user) {
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
            
            res.status(200).json({
                user:user,
                message: "User created successfully",
                sessionToken: token
            })
        }        
    )
    .catch(err => res.status(500).json({error:err}))
});


//USER LOGIN - user/login
router.post('/login', function (req, res) {
    User.findOne({where:{email:req.body.user.email}})
    .then(
        function successfulLogin(user) {
            if(user){
                bcrypt.compare(req.body.user.password, user.password, function(err, matches){
                    if(matches){
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                        
                        res.status(200).json({
                            user:user,
                            message: "User has logged in successfully",
                            sessionToken: token
                        })
                    } else { 
                        res.status(502).send({error: "Failed Login"});
                    }            
            });
            } else {
                res.status(500).send("No user found")
            }
        })
    .catch(err => res.status(500).json({error: err}))
});


module.exports = router;