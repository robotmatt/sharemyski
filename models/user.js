// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fb_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        // name: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
        // fb_id: {
        //     type: DataTypes.STRING,
        // },
        // admin: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        // },
        // active: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        // },
        // rents: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        // },
        // owns: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        // },
        // loc_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // email: {
        //     type: DataTypes.STRING,
        // },
        // phone: {
        //     type: DataTypes.STRING,
        // },
        // renter_rating_avg: {
        //     type: DataTypes.FLOAT(7, 2),
        //     defaultValue: 0,
        // },
        // owner_rating_avg: {
        //     type: DataTypes.FLOAT(7, 2),
        //     defaultValue: 0,
        // },
        // renter_transactions: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 0,
        // },
        // owner_transactions: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 0,
        // },
        // renter_total_value: {
        //     type: DataTypes.FLOAT(7, 2),
        //     defaultValue: 0,
        // },
        // owner_total_value: {
        //     type: DataTypes.FLOAT(7, 2),
        //     defaultValue: 0,
        // }
    });
    // User.sync().then(() => {  // seeds DB if NODE_SEED = yes
    //     if (process.env.NODE_SEED === "yes") {
    //         console.log("**************** I'M HERE!")
    //         User.create({
    //             name: "Edward Bobby",
    //             fb_id: "N/A",
    //             admin: false,
    //             active: true,
    //             rents: true,
    //             owns: true,
    //             loc_id: 1,
    //             email: "edward@gmail.net",
    //             phone: "512-799-5555",
    //             renter_rating_avg: 1.5,
    //             owner_rating_avg: 2.3,
    //             renter_transactions: 3,
    //             owner_transactions: 2,
    //             renter_total_value: 225.54,
    //             owner_total_value: 0,
    //         });
    //         User.create({
    //             name: "Bobby Edwards",
    //             fb_id: "N/A",
    //             admin: false,
    //             active: true,
    //             rents: true,
    //             owns: false,
    //             loc_id: 2,
    //             email: "bobby@gmail.net",
    //             phone: "512-997-5555",
    //             renter_rating_avg: 2.1,
    //             owner_rating_avg: 0,
    //             renter_transactions: 3,
    //             owner_transactions: 2,
    //             renter_total_value: 225.54,
    //             owner_total_value: 0,
    //         });
    //         User.create({
    //             name: "Bill Stephan",
    //             fb_id: "10222313904457070",
    //             admin: true,
    //             active: true,
    //             rents: true,
    //             owns: true,
    //             loc_id: 3,
    //             email: "me@billstephan.com",
    //             phone: "512-997-8948",
    //             renter_rating_avg: 0.3,
    //             owner_rating_avg: 0.8,
    //             renter_transactions: 3,
    //             owner_transactions: 2,
    //             renter_total_value: 2253.50,
    //             owner_total_value: 4321.50,
    //         });
    //     };
    // });

    User.associate = (models) => {
        // associations can be defined here
        User.hasOne(models.Location);
    };

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    // Check to see if user is an admin
    User.prototype.isAdmin = function (id) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};