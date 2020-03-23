// STUFF TABLE CONFIG AND SEEDING
module.exports = function (sequelize, DataTypes) {
    var Stuff = sequelize.define("Stuff", {
        user_id: DataTypes.INTEGER,
        loc_id: DataTypes.INTEGER,
        cat_id: DataTypes.INTEGER,
        cat_name: DataTypes.STRING,
        description: DataTypes.STRING,
        gender: DataTypes.STRING,
        rate: DataTypes.FLOAT(7, 2),
        rating_avg: DataTypes.FLOAT(7, 2),
        image: DataTypes.STRING,
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
    return Stuff;
};