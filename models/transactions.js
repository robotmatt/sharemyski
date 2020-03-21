module.exports = function (sequelize, DataTypes) {
    var Transactions = sequelize.define("Transactions", {
        tran_id: DataTypes.INT,
        tran_owner: DataTypes.INT,
        tran_renter: DataTypes.INT,
        gear_id: DataTypes.INT,
        tran_start: DataTypes.INT,
        tran_stop: DataTypes.INT,
        tran_days: DataTypes.INT,
        tran_insurance: DataTypes.FLOAT(7, 2),
        tran_daily_rate: DataTypes.FLOAT(7, 2),
        tran_total: DataTypes.FLOAT(7, 2),
        tran_renter_rating: DataTypes.FLOAT(7, 2),
        tran_owner_rating: DataTypes.FLOAT(7, 2),
    });
    return Transactions;
};