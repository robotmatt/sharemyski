module.exports = function (sequelize, DataTypes) {
    var Transactions = sequelize.define("Transactions", {
        tran_owner: DataTypes.INTEGER,
        tran_renter: DataTypes.INTEGER,
        gear_id: DataTypes.INTEGER,
        tran_start: DataTypes.INTEGER,
        tran_stop: DataTypes.INTEGER,
        tran_days: DataTypes.INTEGER,
        tran_insurance: DataTypes.FLOAT(7, 2),
        tran_daily_rate: DataTypes.FLOAT(7, 2),
        tran_total: DataTypes.FLOAT(7, 2),
        tran_renter_rating: DataTypes.FLOAT(7, 2),
        tran_owner_rating: DataTypes.FLOAT(7, 2),
    });
    return Transactions;
};