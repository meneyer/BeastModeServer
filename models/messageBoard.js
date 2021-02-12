module.exports = function (sequelize, DataTypes) {
    const MessageBoard = sequelize.define("event", {
        name:{
            type: DataTypes.STRING,
            allowNull: false,         
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true,            
        },
        raceName:{
            type: DataTypes.STRING,
            allowNull: false,         
        },
        message:{
            type: DataTypes.STRING,
            allowNull: false,         
        },        
    });
    return MessageBoard
};

// {"messageboard":
//     {
//         "name": "ENTER***HERE",
//         "email": "ENTER****HERE",
//         "raceName": "ENTER***HERE",
//         "message": "ENTER***HERE",//         
//     }
// }