// USERS TABLE CONFIG AND SEEDING
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        name: DataTypes.STRING,
        fb_id: DataTypes.STRING,
        admin: DataTypes.BOOLEAN,
        active: DataTypes.BOOLEAN,
        rents: DataTypes.BOOLEAN,
        owns: DataTypes.BOOLEAN,
        loc_id: DataTypes.INTEGER,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        renter_rating_avg: DataTypes.FLOAT(7, 2),
        owner_rating_avg: DataTypes.FLOAT(7, 2),
        renter_transactions: DataTypes.INTEGER,
        owner_transactions: DataTypes.INTEGER,
        renter_total_value: DataTypes.FLOAT(7, 2),
        owner_total_value: DataTypes.FLOAT(7, 2),
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


