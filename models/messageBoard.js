module.exports = function (sequelize, DataTypes) {
    const MessageBoard = sequelize.define("messageboard", {
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
            type: DataTypes.STRING(2000),
            allowNull: false,         
        },   
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        }     
    });
    return MessageBoard
};

// {"messageboard":
//     {
//         "name": "ENTER***HERE",
//         "email": "ENTER****HERE",
//         "raceName": "ENTER***HERE",
//         "message": "ENTER***HERE"
//     }
// }