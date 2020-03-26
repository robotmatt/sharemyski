// STUFF TABLE CONFIG AND SEEDING
module.exports = function (sequelize, DataTypes) {
    var Stuff = sequelize.define("Stuff", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        loc_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cat_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        rate: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        rating_avg: {
            type: DataTypes.FLOAT(7, 2),
            defaultValue: 0,
        },
        image: {
            type: DataTypes.STRING,
        }
    });
    Stuff.sync().then(() => {  // seeds DB if NODE_SEED = yes
        if (process.env.NODE_SEED === "yes") {
            Stuff.create({
                user_id: 1,
                loc_id: 1,
                cat_id: 1,
                cat_name: "Skis, Down Hill",
                description: "193 - Fischer RC4 WC GS Curv Boost Men's Race Skis with NA Bindings",
                gender: "M",
                rate: 40,
                rating_avg: 2,
                image: "https://www.rei.com/media/ca768040-865e-42ad-88ca-0c60ffacd2c4?size=784x588"
            });
            Stuff.create({
                user_id: 1,
                loc_id: 1,
                cat_id: 1,
                cat_name: "Skis, Down Hill",
                description: "176 - Rossignol Seek 7 HD Skis with Xpress 11 Bindings",
                gender: "M",
                rate: 20,
                rating_avg: 3,
                image: "https://curated-uploads.imgix.net/AgAAAB0A5-9lHGDdMwykPMvyzf5RUA.jpg?auto=compress%2Cformat&q=75&fit=crop&ch=Width%2CDPR%2CSave-Data&ixlib=react-8.6.1&w=500&dpr=1"
            });
            Stuff.create({
                user_id: 3,
                loc_id: 3,
                cat_id: 5,
                cat_name: "Sleds / Toboggans",
                description: "Red Plastic Snow Saucer",
                gender: "M",
                rate: 40,
                rating_avg: 2,
                image: "https://static.turbosquid.com/Preview/2016/12/28__03_36_39/SnowSaucer3dsmodel003.jpg5C82C94A-1B0E-4094-A16C-56102670CAB7DefaultHQ.jpg"
            });
        };
    });

    Stuff.associate = function (models) {
        Stuff.belongsTo(models.Users, {
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        });
    };
    Stuff.associate = function (models) {
        Stuff.belongsTo(models.Location, {
            foreignKey: {
                name: "loc_id",
                allowNull: false
            }
        });
    };

    return Stuff;
};