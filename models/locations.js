module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        loc_id: DataTypes.INT,
        loc_address1: DataTypes.STRING,
        loc_address2: DataTypes.STRING,
        loc_city: DataTypes.STRING,
        loc_state: DataTypes.STRING,
        loc_country: DataTypes.STRING,
        loc_long: DataTypes.INT,
        loc_lat: DataTypes.INT,
    });
    return Location;
};