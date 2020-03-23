// CATEGORIES TABLE CONFIG AND SEEDING
module.exports = function (sequelize, DataTypes) {
    var Categories = sequelize.define("Categories", {
        description: DataTypes.STRING
    });
    Categories.sync().then(() => {  // seeds DB if NODE_SEED = yes
        if (process.env.NODE_SEED === "yes") {
            Categories.create({
                description: "Skis - Downhill",
            });
            Categories.create({
                description: "Skis - Cross-Country",
            });
            Categories.create({
                description: "Snow Boards",
            });
            Categories.create({
                description: "Snow Shoes",
            });
            Categories.create({
                description: "Sleds / Toboggans",
            });
        };
    });
    return Categories;
};