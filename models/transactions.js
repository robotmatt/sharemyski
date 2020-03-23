// TRANSACTIONS  TABLE CONFIG AND SEEDING
module.exports = function (sequelize, DataTypes) {
    var Transactions = sequelize.define("Transactions", {
        owner_id: DataTypes.INTEGER,
        renter_id: DataTypes.INTEGER,
        stuff_id: DataTypes.INTEGER,
        loc_id: DataTypes.INTEGER,
        start: DataTypes.INTEGER,
        stop: DataTypes.INTEGER,
        days: DataTypes.INTEGER,
        insurance: DataTypes.FLOAT(7, 2),
        daily_rate: DataTypes.FLOAT(7, 2),
        total: DataTypes.FLOAT(7, 2),
        renter_rating: DataTypes.FLOAT(7, 2),
        owner_rating: DataTypes.FLOAT(7, 2),
    });
    Transactions.sync().then(() => {  // seeds DB if NODE_SEED = yes
        if (process.env.NODE_SEED === "yes") {
            Transactions.create({
                owner_id: 1,
                renter_id: 2,
                stuff_id: 1,
                loc_id: 1,
                start: 0,
                stop: 0,
                days: 2,
                insurance: 12.50,
                daily_rate: 22.5,
                total: 57.5,
                renter_rating: 2,
                owner_rating: 1,
            });
            Transactions.create({
                owner_id: 1,
                renter_id: 2,
                stuff_id: 2,
                loc_id: 1,
                start: 0,
                stop: 0,
                days: 2,
                insurance: 0,
                daily_rate: 22.5,
                total: 45.00,
                renter_rating: 2,
                owner_rating: 1,
            });
        };
    });
    return Transactions;
};