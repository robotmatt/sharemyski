module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        cat_id: DataTypes.INT,
        cat_name: DataTypes.STRING,
    });
    return Category;
  };
