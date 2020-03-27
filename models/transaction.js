// TRANSACTION  TABLE CONFIG AND SEEDING
module.exports = function (sequelize, DataTypes) {
    var Transaction = sequelize.define("Transaction", {
        OwnerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        RenterId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        StuffId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        LocationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        start: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        stop: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        days: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        insurance: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        daily_rate: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        total: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        renter_rating: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        owner_rating: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        }
    });
    Transaction.sync().then(() => {  // seeds DB if NODE_SEED = yes
        if (process.env.NODE_SEED === "yes") {
            Transaction.create({
                OwnerId: 1,
                RenterId: 2,
                StuffId: 1,
                LocationId: 1,
                start: 0,
                stop: 0,
                days: 2,
                insurance: 12.50,
                daily_rate: 22.5,
                total: 57.5,
                renter_rating: 2,
                owner_rating: 1,
            });
            Transaction.create({
                OwnerId: 1,
                RenterId: 2,
                StuffId: 2,
                LocationId: 1,
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
    return Transaction;
};