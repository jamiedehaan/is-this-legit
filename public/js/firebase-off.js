var config = {
    apiKey: "AIzaSyCa7eEIkJWEEX4wraq_1zVBxk3ABKhFoeE",
    authDomain: "project-two-d4368.firebaseapp.com",
    databaseURL: "https://project-two-d4368.firebaseio.com",
    projectId: "project-two-d4368",
    storageBucket: "project-two-d4368.appspot.com",
    messagingSenderId: "314250402737"
};
firebase.initializeApp(config);

// Google auth with Firebase
// Create an instance of the Google provider object
var provider = new firebase.auth.GoogleAuthProvider();

// To sign in with a pop-up window, call signInWithPopup
firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});

var currentUser;
// To get current user, set an observer on the Auth object
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $("#signed-in").html("<img src='images/google-small.svg' alt='Google icon'> Signed in as <strong>" + user.displayName + "<strong>");
      currentUser = user;
    //   console.log(user);
    } else {
      // No user is signed in.
    }
});

// To get the currently signed-in user by using the currentUser property. If a user isn't signed in, currentUser is null.
var user = firebase.auth().currentUser;

if (user) {
    // User is signed in.
} else {
    // No user is signed in.
}

// To get a user's profile
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
                    // this value to authenticate with your backend server, if
                    // you have one. Use User.getToken() instead.
}

// To sign out a user
firebase.auth().signOut().then(function() {
    // Sign-out successful.
}).catch(function(error) {
    // An error happened.
});