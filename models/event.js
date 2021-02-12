module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define("event", {
        raceName:{
            type: DataTypes.STRING,
            allowNull: false,         
        },
        location:{
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
            type: DataTypes.STRING,
            allowNull: true
        },
        lodging:{
            type: DataTypes.STRING,
            allowNull: true,         
        },
        travelPlan:{
            type: DataTypes.STRING,
            allowNull: true
        },
    });
    return Event
};

// {"event":
//     {
//         "raceName": "ENTER***HERE",
//         "location": "ENTER****HERE",
//         "date": "ENTER***HERE",
//         "startTime": "ENTER***HERE",
//         "packList": "ENTER****HERE",
//         "lodging": "ENTER***HERE",
//         "travelPlan": "ENTER****HERE",
//     }
// }