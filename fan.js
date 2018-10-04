$(document).ready(function(){
document.getElementById("raplink").onmouseout = function() {mouseOut()};
document.getElementById("raplink").onmouseover = function() {mouseOver()};

function mouseOver() {
    document.getElementById("raplink").style.color = "yellow";
}

function mouseOut() {
    document.getElementById("raplink").style.color = "black";
}
});
$(document).ready(function(){
document.getElementById("zilla").onmouseout = function() {mouseOut()};
document.getElementById("zilla").onmouseover = function() {mouseOver()};

function mouseOver() {
    document.getElementById("zilla").style.color = "blue";
}

function mouseOut() {
    document.getElementById("zilla").style.color = "black";
}
});

$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDQuVi0hNiQQA-8ybbJONw322WQDqo3Ak",
    authDomain: "fanpage-f4178.firebaseapp.com",
    databaseURL: "https://fanpage-f4178.firebaseio.com",
    projectId: "fanpage-f4178",
    storageBucket: "fanpage-f4178.appspot.com",
    messagingSenderId: "459995070204"
  };
  firebase.initializeApp(config);

  var fanData = firebase.database();

  $('#share').on("click", function(){

  //Grabs user input
  var yourFav= $("#urFav ").val().trim();
  var FavoriteSong = $("#favSong").val().trim();
  // Create object for holding train data
  console.log(UrFav);
  return false;

  
    var newInput = {
        artistName: artistName,
        songName: songName
        
  }

  
  database.push(newInput);

		$("#urFav").val("");
		$("#favSong").val("");
		

		// Prevents page from refreshing
		return false;
	});

database.on("child_added", function(childSnapshot, prevChildKey){

		console.log(childSnapshot.val());

		// assign firebase variables to snapshots.
		var name = childSnapshot.val().artistName;
		var song = childSnapshot.val().songName;
		
		
		
		
		// Test for correct times and info
		

		// Append train info to table on page
		$("#urFav + #favSong").append("<input>" + artistName + "<input>" + songName );

	});
});