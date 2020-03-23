// USERS TABLE CONFIG AND SEEDING
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        fb_id: {
            type: DataTypes.STRING,
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
        loc_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        renter_rating_avg: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        owner_rating_avg: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        renter_transactions: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        owner_transactions: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        renter_total_value: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        owner_total_value: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
    });
    Users.sync().then(() => {  // seeds DB if NODE_SEED = yes
        if (process.env.NODE_SEED === "yes") {
            Users.create({
                name: "Edward Bobby",
                fb_id: "N/A",
                admin: false,
                active: true,
                rents: true,
                owns: true,
                loc_id: 1,
                email: "edward@gmail.net",
                phone: "512-799-5555",
                renter_rating_avg: 1.5,
                owner_rating_avg: 2.3,
                renter_transactions: 3,
                owner_transactions: 2,
                renter_total_value: 225.54,
                owner_total_value: 0,
            });
            Users.create({
                name: "Bobby Edwards",
                fb_id: "N/A",
                admin: false,
                active: true,
                rents: true,
                owns: false,
                loc_id: 2,
                email: "bobby@gmail.net",
                phone: "512-997-5555",
                renter_rating_avg: 2.1,
                owner_rating_avg: 0,
                renter_transactions: 3,
                owner_transactions: 2,
                renter_total_value: 225.54,
                owner_total_value: 0,
            });
            Users.create({
                name: "Bill Stephan",
                fb_id: "10222313904457070",
                admin: true,
                active: true,
                rents: true,
                owns: true,
                loc_id: 3,
                email: "me@billstephan.com",
                phone: "512-997-8948",
                renter_rating_avg: 0.3,
                owner_rating_avg: 0.8,
                renter_transactions: 3,
                owner_transactions: 2,
                renter_total_value: 2253.50,
                owner_total_value: 4321.50,
            });
        };
    });
    return Users;
};


