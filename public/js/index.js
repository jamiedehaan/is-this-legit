// var user = require("js/firebase-off.js");
// console.log("user from index.js", user);

$(function() {

  $(".delete").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data(id);
console.log(id);
    $.ajax("api/saveds/" + id.id, {
      type : "DELETE",
    })
    .then(function() {
      location.reload()
    })
  });
  
  $("#submit").on("click", function(event) {
    event.preventDefault();

    var data =  {
      text: $("#text").val().trim()
    }
    console.log('working...');
    console.log(data.text);
    
    $.ajax("/api/results", {
      type : "POST",
      data : data,
    }).then(function(res) {
      //console.log(res);
      //location.reload();
      $("#sub").text(res[0]);
      $("#senti").text(res[1]);
      $("#topic").text(res[2]);
      $("#adult").text(res[3]);
      $("#comm").text(res[4])

      // window.location = '/';
      console.log("success");
      console.log(res);
    })
  });

  // TEST WHEN WE HAVE A "SAVE" BUTTON
  $(".saveds").on("click", function(event) {
    event.preventDefault();
  
    var newSaved = {
      article_name : $("#titleName").val().trim(),
      subjectivity : $("#sub").text(),
      sentiment : $("#senti").text(),
      commercial : $("#comm").text(),
      topic : $("#topic").text(),
      adult : $("#adult").text(),
      text : $("#text").val().trim(),
      user_id : currentUser.uid
    }

    console.log("newSaved: ", newSaved)
  
    $.ajax("/api/saveds", {
      type: "POST",
      data: newSaved
    }).then(
      function() {
          console.log("Added new saved article");
          // reload page to get updated list
          location.reload();
      }
    );  
  });
})