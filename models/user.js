// USER TABLE CONFIG
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fbId: {
            type: DataTypes.STRING,
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