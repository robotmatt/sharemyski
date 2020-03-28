// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

// USER TABLE CONFIG
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fb_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fbToken: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            defaultValue: "USA",
        },
        email: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        xOwner: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        xRenter: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        equipRatingAvg: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        renterRatingAvg: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        rents: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        owns: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
    return User;
};