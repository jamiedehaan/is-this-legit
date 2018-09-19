// GIVEN STARTER CODE
// api-key: 917ef13adf4f58b8421cc6a161f94f5a
var datum = require("datumbox").factory("917ef13adf4f58b8421cc6a161f94f5a");
var app = require("express");
var db = require("../models").saved;

module.exports = function(app) {
  // Get all saveds
  app.get("/api/saveds", function(req, res) {
    db.findAll({}).then(function(dbSaved) {
      res.json(dbSaved);
    });
  });

  // Create a new Saved
  app.post("/api/saveds", function(req, res) {
    db.create(req.body).then(function(dbSaved) {
      res.json(dbSaved);
    });
  });

  // Delete an Saved by id
  app.delete("/api/saveds/:id", function(req, res) {
    db.destroy({ where: { id: req.params.id } }).then(function(dbSaved) {
      res.json(dbSaved);
    });
  });

  //I THINK WE DO NOT NEED UPDATE
  
  // DatumBox API NODE.JS CODE

  // api-key: 917ef13adf4f58b8421cc6a161f94f5a
  var datum = require("datumbox").factory("917ef13adf4f58b8421cc6a161f94f5a");


  // asynchronous parallel service request from DatumBox on text.
  //
  // textToCheck = string of user input in textarea
  app.post("/api/results", function(req, res) {
    var textToCheck = '';
    var serviceValues = ['SubjectivityAnalysis', 'SentimentAnalysis', 'TopicClassification', 'AdultContentDetection', 'CommercialDetection'];
    datum.parallel(textToCheck, serviceValues,
      function(err, results) {
        if (err) return console.error(err);
        // return results array matching serviceValues array
        res.json(results);
        //JACOB: changed this from return(results)
        //recieves response array from datum CHECK
      }
    );
  })
  
};