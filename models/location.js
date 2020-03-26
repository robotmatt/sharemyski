// LOCATION TABLE CONFIG AND SEEDING
module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
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
        lng: {
            type: DataTypes.DOUBLE,
        },
        lat: {
            type: DataTypes.DOUBLE,
        }
    });
    Location.sync().then(() => {  // seeds DB if NODE_SEED = yes
        if (process.env.NODE_SEED === "yes") {
            Location.create({
                address1: "222 E 6th Street",
                address2: "",
                city: "Austin",
                state: "Texas",
                code: "78702",
                Country: "USA",
                lng: -97.740440,
                lat: 30.267680,
            });
            Location.create({
                address1: "777 W 6th Street",
                address2: "",
                city: "Austin",
                state: "Texas",
                code: "78702",
                Country: "USA",
                lng: -97.749730,
                lat: 30.270050,
            });
            Location.create({
                address1: "9842 Spicewood Mesa",
                address2: "",
                city: "Austin",
                state: "Texas",
                code: "78759",
                Country: "USA",
                lng: -97.791230,
                lat: 30.414420,
            });
        };
    });
    return Location;
};