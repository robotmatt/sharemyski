// config/passport.js

// load all the things we need
require("dotenv").config();

var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

// load up the user model
const db = require("../models");

module.exports = function (passport) {

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    // code for login (use('local-login', new LocalStategy))
    // code for signup (use('local-signup', new LocalStategy))

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

            // pull in our app id and secret from our auth.js file
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: "/auth/facebook/callback"

        },

        // facebook will send back the token and profile
        function (token, refreshToken, profile, done) {

            // asynchronous
            process.nextTick(function () {
                console.log(token);
                console.log(profile);
                db.User.findOne({
                    where: [{fb_id: profile.id}]
                  }).then(function (dbUser) {
                    if (dbUser) {
                        return done(null, dbUser); // user found, return that user
                    } else {
                        // if there is no user found with that facebook id, create them
                        var newUser = {
                            name: profile.displayName,
                            fb_id: profile.id,
                            token: token,
                            
                        };  

                        db.User.create(newUser).then(function (dbUser) {
                            return done(null, dbUser);
                          });
                    }
                  });

            });

        }));

};