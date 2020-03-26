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
  app.get("/api/stuff", function (req, res) {
    db.Stuff.findAll({}).then(function (dbStuff) {
      res.json(dbStuff);
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