module.exports = function (sequelize, DataTypes) {
    var Gear = sequelize.define("Gear", {
        gear_id: DataTypes.INT,
        user_id: DataTypes.INT,
        loc_id: DataTypes.INT,
        cat_id: DataTypes.INT,
        cat_name: DataTypes.STRING,
        gear_desc: DataTypes.STRING,
        gear_gender: DataTypes.STRING,
        gear_rate: DataTypes.FLOAT(7, 2),
        gear_rating: DataTypes.FLOAT(7, 2),
        gear_imge: DataTypes.STRING,
    });
    return Gear;
};