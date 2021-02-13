const Sequelize = require('sequelize');
const sequelize = new Sequelize('beast-mode-server', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function(){
        console.log('connected to beast mode server database');
    },
    function(err){
        console.log(err);
    }
);

module.exports=sequelize