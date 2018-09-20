var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/index", function(req, res) {
    console.log("RUNNING")
    db.saved.findAll({}).then(function(dbsaveds) {
      res.render("index", {
        msg: "Welcome!",
        saveds: dbsaveds
      });
    });
  });

  // Load saved page and pass in an saved by id
  app.get("/saved/:id", function(req, res) {
    db.saved.findOne({ where: { id: req.params.id } }).then(function(dbsaved) {
      res.render("saved", {
        saved: dbsaved
      });
    });
  });

  // 
  app.post("api/results/", function(req, res) {
    res.send(req.body);
  });
  
  // test firebase fb login
  app.get("/", function(req, res) {
    console.log(req.results);
    db.saved.findAll({}).then(function(dbsaveds) {
      res.render("index", {
        msg: "Welcome!",
        saveds: dbsaveds
      });
    });
    // res.render("index", req.results);
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};