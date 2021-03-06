const Sequelize = require('sequelize');
// const sequelize = new Sequelize('beast-mode-server', 'postgres', 'password', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

//if you want to run locally, comment out 10-15 (dialect) or use lines 2-5 instead of the below.
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
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