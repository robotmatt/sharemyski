var db = require("../models");
const passport = require('passport');

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });
  // Load search page
  app.post("/search", function (req, res) {

    db.Stuff.findAll({
      include: [{
        model: db.Users,
        model: db.Locations
      }]
    }).then(function (dbStuff) {
      console.log(dbStuff);
      res.render("search", {
        lat: req.body.lat,
        lng: req.body.lng,
        data: dbStuff
      });
    });
    // db.Stuff.findAll({}).then(function (dbStuff) {
    //   console.log(dbStuff);
    //   res.render("search", {
    //     lat: req.body.lat,
    //     lng: req.body.lng,
    //     data: dbStuff
    //   });
    // });
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

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get('/login',
    function (req, res) {
      res.render('login');
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