module.exports = function (sequelize, DataTypes) {
    var Gear = sequelize.define("Gear", {
        gear_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        loc_id: DataTypes.INTEGER,
        cat_id: DataTypes.INTEGER,
        cat_name: DataTypes.STRING,
        gear_desc: DataTypes.STRING,
        gear_gender: DataTypes.STRING,
        gear_rate: DataTypes.FLOAT(7, 2),
        gear_rating: DataTypes.FLOAT(7, 2),
        gear_imge: DataTypes.STRING,
    });
    return Gear;
};