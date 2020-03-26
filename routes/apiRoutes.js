var db = require("../models");

module.exports = function (app) {
  // Get all Stuff with locations
  app.get("/api/stuff_location/", function (req, res) {
    db.Stuff.findAll({
      include: [{
        model: db.Location
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

  app.get("/api/user/:id?", function(req, res) {
    let id = req.params.id;
    if(id){
      db.User.findOne({
        id: id
      }).then(function (dbUser) {
        res.json(dbUser);
      });
    }
    else{
      db.User.findAll({}).then(function(dbUser) {
        res.json(dbUser);
      });
    } 
    
  });

  app.get("/api/transaction/:id?", function(req, res) {
    let id = req.params.id;
    if(id){
      db.Transaction.findOne({
        id: id
      }).then(function (dbTransaction) {
        res.json(dbTransaction);
      });
    }
    else{
      db.Transaction.findAll({}).then(function(dbTransaction) {
        res.json(dbTransaction);
      });
    }});

  app.get("/api/location/:id?", function(req, res) {
    let id = req.params.id;
    if(id){
      db.Location.findOne({
        id: id
      }).then(function (dbLocation) {
        res.json(dbLocation);
      });
    }
    else{
      db.Location.findAll({}).then(function (dbLocation) {
        res.json(dbLocation);
      });
    } 
  });

  app.get("/api/category/:id?", function(req, res) {
    let id = req.params.id;
    if(id){
      db.Category.findOne({
        id: id
      }).then(function (dbCategory) {
        res.json(dbCategory);
      });
    }
    else{
      db.Category.findAll({}).then(function(dbCategory) {
        res.json(dbCategory);
      });
    } 
    
   
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