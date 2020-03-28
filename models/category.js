// Category TABLE CONFIG
module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Category;
};