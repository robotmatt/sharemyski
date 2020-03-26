var db = require("../models");

module.exports = function (app) {
  // Get all Stuff with locations
  app.get("/api/stuff_locations/", function (req, res) {
    db.Stuff.findAll({
      include: [{
        model: db.Locations
      }]
    }).then(function (dbStuff) {
      res.json(dbStuff);
    });
  });
  
  // Get all Stuff
  app.get("/api/stuff/:id?", function (req, res) {
    let id = req.params.id;
    if(id){
      db.Stuff.findOne({
        id: id
      }).then(function (dbStuff) {
        res.json(dbStuff);
      });
    }
    else{
      db.Stuff.findAll({}).then(function (dbStuff) {
        res.json(dbStuff);
      });
    } 
  });

  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/transactions", function(req, res) {
    db.Transactions.findAll({}).then(function(dbTransactions) {
      res.json(dbTransactions);
    });
  });

  app.get("/api/locations", function(req, res) {
    db.Locations.findAll({}).then(function(dbLocations) {
      res.json(dbLocations);
    });
  });

  app.get("/api/categories", function(req, res) {
    db.Categories.findAll({}).then(function(dbCategories) {
      res.json(dbCategories);
    });
  });

  // Create a new example
  app.post("/api/stuff", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  

  // Delete an example by id
  app.delete("/api/stuff/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};