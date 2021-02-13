require("dotenv").config();
let express = require('express');
let app = express();
let sequelize=require('./db')

let user = require('./controllers/userController');
let events = require('./controllers/eventController');
let messageboard = require('./controllers/messageBoardController');

sequelize.sync();

app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/user', user)

app.use('/events', events)

app.use('/messageboard', messageboard)

app.listen(3000, function(){
    console.log("App is listening on port 3000")
})