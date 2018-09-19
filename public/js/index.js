// var user = require("js/firebase-off.js");
// console.log("user from index.js", user);

$(function() {
  
  $("#text").on("click", function(event) {
    event.preventDefault();
    
    $.ajax("/api/results", {
      type : "POST",
      data : $("#text").val().trim(),
    }).then(function(res) {
      res.send("/index", res.body)
    })
  });

  // TEST WHEN WE HAVE A "SAVE" BUTTON
  $(".save").on("click", function(event) {
    event.preventDefault();
  
    var newSaved = {
      article_name: $("#article-name").val().trim(),
      subjectivity: $("#subjectivity").val().trim(),
      sentiment: $("#sentiment").val().trim(),
      commercial: $("#commercial").val().trim(),
      topic: $("#topic").val().trim(),
      adult: $("#adult").val().trim(),
      user_id: currentUser.uid
    }

    console.log("newSaved: ", newSaved)
  
    $.ajax("/api/saveds", {
      type: "POST",
      data: newSaved
    }).then(
      function() {
          console.log("Added new saved article");
          // reload page to get updated list
          // location.reload();
      }
    );  
  });
})