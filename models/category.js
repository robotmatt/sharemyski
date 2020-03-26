// Category TABLE CONFIG AND SEEDING
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
    Category.sync().then(() => {  // seeds DB if NODE_SEED = yes
        if (process.env.NODE_SEED === "yes") {
            Category.create({
                description: "Skis - Downhill",
            });
            Category.create({
                description: "Skis - Cross-Country",
            });
            Category.create({
                description: "Snow Boards",
            });
            Category.create({
                description: "Snow Shoes",
            });
            Category.create({
                description: "Sleds / Toboggans",
            });
        };
    });
    return Category;
};