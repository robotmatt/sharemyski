// LOCATIONS TABLE CONFIG AND SEEDING
module.exports = function (sequelize, DataTypes) {
    var Locations = sequelize.define("Locations", {
        address1: DataTypes.STRING,
        address2: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        code: DataTypes.STRING,
        country: DataTypes.STRING,
        long: DataTypes.FLOAT,
        lat: DataTypes.FLOAT,
    });
    Locations.sync().then(() => {  // seeds DB if NODE_SEED = yes
        if (process.env.NODE_SEED === "yes") {
            Locations.create({
                address1: "222 E 6th Street",
                address2: "",
                city: "Austin",
                state: "Texas",
                code: "78702",
                Country: "USA",
                long: 97.7431,
                lat: 30.2672,
            });
            Locations.create({
                address1: "777 W 6th Street",
                address2: "",
                city: "Austin",
                state: "Texas",
                code: "78702",
                Country: "USA",
                long: 97.7431,
                lat: 30.2672,
            });
            Locations.create({
                address1: "9842 Spicewood Mesa",
                address2: "",
                city: "Austin",
                state: "Texas",
                code: "78759",
                Country: "USA",
                long: 97.7431,
                lat: 30.2672,
            });
        };
    });
    return Locations;
};