var db = require("../models");
const passport = require('passport');
var express = require("express");

var app = express();

app.use(passport.initialize());
app.use(passport.session());

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });
  // Load search page
  app.post("/search/:location?/:startDate?/:endDate?", function (req, res) {
    let location = req.params.location;
    let lat = req.body.lat;
    let lng = req.body.lng;
    let startDate = req.params.startDate;
    let endDate = req.params.endDate;
    if (location && startDate && endDate) {
      res.render("index");
    } else if (lat && lng) {
      db.Stuff.findAll({
        include: [db.Location, db.User, db.Category]
      }).then(function (dbStuff) {
        console.log(dbStuff);
        res.render("search", {
          lat: req.body.lat,
          lng: req.body.lng,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          data: dbStuff
        });
      });
    }
  });

  app.get("/rent/:id", function (req, res) {
    db.Stuff.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Location, db.User, db.Category]
    }).then(function (dbStuff) {
      console.log(dbStuff);
      res.render("rentalrequest", {
        all: false,
        id: req.params.id,
        data: dbStuff
      });
    });
  });

  app.get("/stuff/:id", function (req, res) {
    db.Stuff.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Location, db.User, db.Category]
    }).then(function (dbStuff) {
      console.log(dbStuff);
      res.render("stuff", {
        all: false,
        id: req.params.id,
        data: dbStuff
      });
    });
  });

  app.get("/admin/stuff", function (req, res) {
    // check if user is admin
    res.render("stuff", {
      all: true
    });
    // else res.render("404");
  });

  app.get("/admin/user", function (req, res) {
    // check if user is admin
    res.render("user");
    // else res.render("404");
  });

  app.get("/admin/transaction", function (req, res) {
    // check if user is admin
    res.render("transaction");
    // else res.render("404");
  });

  app.get("/admin/location", function (req, res) {
    // check if user is admin
    res.render("location");
    // else res.render("404");
  });

  app.get("/admin/category", function (req, res) {
    // check if user is admin
    res.render("category");
    // else res.render("404");
  });

  app.get("/allrentals", function (req, res) {
    // if users is admin
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("allrentals", {
        authorized: "1",
        msg: "Welcome!",
        examples: dbExamples
      });
    });
    // otherwise send unathorized message
    res.render("notauthorized", {
      msg: "Welcome!",
      examples: dbExamples
    });
  });

  app.get('/login',
    function (req, res) {
      res.render('login');
    });
  app.get('/signin',
    function (req, res) {
      res.redirect('/login/facebook');
    });

  app.get('/login/facebook',
    passport.authenticate('facebook'));

  app.get('/return',
    passport.authenticate('facebook', {
      failureRedirect: '/login'
    }),
    function (req, res) {
      res.redirect('/');
    });

  // route for showing the profile page
  app.get('/profile', isLoggedIn, function (req, res) {
    res.render('profile', {
      user: req.user // get the user out of session and pass to template
    });
  });

  // =====================================
  // FACEBOOK ROUTES =====================
  // =====================================
  // route for facebook authentication and login
  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
  }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/'
    }));

  // route for logging out
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });


  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
  }

  app.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
      console.log(picture)
      res.render('profile', {
        user: req.user
      });
    });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};