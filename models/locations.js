// LOCATIONS TABLE CONFIG AND SEEDING
module.exports = function (sequelize, DataTypes) {
    var Locations = sequelize.define("Locations", {
        address1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address2: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            defaultValue: "USA",
        },
        long: {
            type: DataTypes.DOUBLE,
        },
        lat: {
            type: DataTypes.DOUBLE,
        }
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
                long: "97.7431",
                lat: "30.2672",
            });
            Locations.create({
                address1: "777 W 6th Street",
                address2: "",
                city: "Austin",
                state: "Texas",
                code: "78702",
                Country: "USA",
                long: "-97.7431",
                lat: "30.2672",
            });
            Locations.create({
                address1: "9842 Spicewood Mesa",
                address2: "",
                city: "Austin",
                state: "Texas",
                code: "78759",
                Country: "USA",
                long: "-97.7431",
                lat: "30.2672",
            });
        };
    });
    return Locations;
};