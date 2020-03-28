// TRANSACTION  TABLE CONFIG 
module.exports = function (sequelize, DataTypes) {
    const Transaction = sequelize.define("Transaction", {
        ownerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        renterId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tranDate: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        daysRented: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        tranValue: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
    });
    Transaction.associate = (models) => { // associations can be defined here
        Transaction.belongsTo(models.Item)
    };
    return Transaction;
};