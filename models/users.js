module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: DataTypes.STRING,
        user_auth_id: DataTypes.STRING,
        user_renter: DataTypes.BOOLEAN,
        user_owner: DataTypes.BOOLEAN,
        user_home: DataTypes.INTEGER,
        user_email: DataTypes.STRING,
        user_phone: DataTypes.STRING,
        user_renter_rating: DataTypes.FLOAT(7, 2),
        user_owner_rating: DataTypes.FLOAT(7, 2),
        user_renter_trans: DataTypes.INTEGER,
        user_owner_trans: DataTypes.INTEGER,
        user_renter_total: DataTypes.FLOAT(7, 2),
        user_owner_total: DataTypes.FLOAT(7, 2),
    });
    return User;
};





