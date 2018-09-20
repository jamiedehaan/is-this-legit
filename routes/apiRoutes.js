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
      console.log("saved"+dbSaved);
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
    console.log('posting...');
    console.log(req.body.text);
    var textToCheck = req.body.text;
    var serviceValues = ['SubjectivityAnalysis', 'SentimentAnalysis', 'TopicClassification', 'AdultContentDetection', 'CommercialDetection'];
    datum.parallel(textToCheck, serviceValues,
      function(err, results) {
        if (err) return console.error(err);
        // console.log(results);
        // var results = {
        //   sub : results[0],
        //   senti : results[1],
        //   topic : results[2],
        //   adult : results[3],
        //   comm : results[4]
        // };

        // console.log(req.results);
        // console.log('testing');
        res.json(results);
        //res.render('index', req.resuts);
        // return results array matching serviceValues array
        // res.render("index", results);
        //res.render('index', {name: 'hey there'});

        // res.render('index', function(err, results) {
        //   res.send(results);
        // });

        //res.redirect('/');
        // res.status(200).end();

        //JACOB: changed this from return(results)
        //recieves response array from datum CHECK
      }); 
  });
  
}