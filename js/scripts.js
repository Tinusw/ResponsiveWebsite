// Add code for twitter/facebook/maps stuff here we want it to load before document is ready

// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook
(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

// Google Maps JS plus marker
function initMap() {
	var myLatLng = {lat: 52.515064, lng: 13.3473111};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16
  });

// add Marker plus BOUNCE
  var marker = new google.maps.Marker({
  	position: myLatLng,
  	map: map,
  	animation: google.maps.Animation.BOUNCE,
  	title: 'Come say hi!'
  });
}


//  Code that tells JS to wait until the whole DOM is loaded
$(document).ready(function(){
	// Smooth Scrolling
  var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

   // Intialize Stellar.JS
   $.stellar();

   // Tooltips
     $(function () {
      $('#[insert ID your tooltip here]').tooltip();
     });


//
// Event Listeners
//

// Running Character Count
$("#emailMessage").on("keyup", function(){
	console.log("keyup happened"); //Catch keyup
  //Log how many chars user typed//
	var charCount = $("#emailMessage").val().length;
	console.log(charCount);
  //Display running count to user in a <p> tag
  $("#char-count").html(charCount);

  // IF conditional statement to change text color if charCount > 50
  if(charCount > 50) {
  	    $("#char-count").css("color", "red");
  } else {
  	    $("#char-count").css("color", "black");
  };


});

// Send Button on-click event, also checks for empty strings and creates red border
$("#sendButton").on("click", function() {
	  // Capture and log events
	  var name = $("#emailName").val();
    console.log(name);
    var comment = $("#emailMessage").val();
    console.log(comment);
    console.log("clicked");

    if(comment == "") {
  	    $("#emailMessage").css("border-color", "red");
        $("#emailName").css("border", "2px solid red");
    	  $("#visibleComment").html("Please type a message first " + name + "!");
  } else {
  	    $("#visibleComment").html("thanks " + name +", get back to you soon! Here's what you wrote: " + comment);
		    // Hide Inputs
		    $("#emailMessage").hide();
		    $("#emailName").hide();
		    $("#email").hide();
		    $("sendButton").hide();
		    $("#char-count").hide();
		    return false;
  }
});

// Alternate method for validating fields using classes to show green or blue color if input is not blank, also if email is actually an email address.

$("emailName").on('input', function(){
});

// Name cannot be blank
$('#emailName').on('input', function(){
    var input=$(this);
    var is_name=input.val();

    if (is_name){
      input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});

// Email cannot be blank (uses regular expressions)
$('#email').on('input', function(){
    var input=$(this);
    // not 100% sure what this regular expression var does
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email=re.test(input.val());

    if(is_email){
      input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});

// message cannot be blank

$('#emailMessage').on('input', function(){
    var input=$(this);
    var is_Message=input.val();

    if (is_Message){
      input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});


//
// Work Section
//

// work.js is good to go console message
console.log(works);

//looping through works array and adding images with borders using modulus operators
for(var i = 0; i < works.length; i++ ){
  $("#workRow").append("\
  	<div class= 'col-xs-12 col-sm-6 col-lg-3'>\
  	  <a href='#' class='work-img'>\
	      <img class='img-responsive' src='" + works[i].pic + "'>\
	      <span class='info'><p class='proj-title'>Title:</p> " + works[i].title + "</span>\
	    </a>\
    </div>\
  ");
  $("#workRow").css("text-align", "center");
  var images = $("#workRow img");
  if(i%2 === 0) {
  	$(images[i]).css("border", "2px solid DodgerBlue");
  } else {
  	$(images[i]).css("border", "2px solid Salmon");
  };

};

//mouseenter effect for titles to pop up on hover
$(".work-img").mouseenter( function() {
	$(".info", this).show();
});

$(".work-img").mouseleave( function() {
  $(".info", this).hide();
});


// alert("Document is ready!");
$(".notice").css("border", "2px solid red");
});
