module.exports = function (sequelize, DataTypes) {
    const Events = sequelize.define("event", {
        raceName:{
            type: DataTypes.STRING,
            allowNull: false,         
        },
        location:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        length:{
            type: DataTypes.STRING,
            allowNull: true
        },
        date:{
            type: DataTypes.DATEONLY,
            allowNull: true,         
        },
        startTime:{
            type: DataTypes.STRING,
            allowNull: true,         
        },
        packList:{
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        lodging:{
            type: DataTypes.STRING,
            allowNull: true,         
        },
        travelPlan:{
            type: DataTypes.STRING(1500),   
            allowNull: true,
        },
    });
    return Events
};

// {"events":
//     {
//         "raceName": "ENTER***HERE",
//         "location": "ENTER****HERE",
//         "length" : "ENTER****HERE",
//         "date": "ENTER***HERE",
//         "startTime": "ENTER***HERE",
//         "packList": "ENTER****HERE",
//         "lodging": "ENTER***HERE",
//         "travelPlan": "ENTER****HERE"
//     }
// }