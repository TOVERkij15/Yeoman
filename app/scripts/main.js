"use strict";




/////////Example 1).///////////////////

$(".button").click(function(){
	$(".click").css("background-color","grey");

});


////////////Example 2).////////////////
$( "button" ).click(function() {
  $( this ).parent().slideUp( "slow", function() {
    $( "#msg" ).text( $( "button", this ).text() + " finished." );
  });
});

///////////Example 3).///////////////
$(".button2").click(function(){
	$(".push").css("background-color","pink");

});

/////////Example 4).//////////////

$( ".button3" ).click(function() {
  $( ".pull" ).fadeOut( "slow", function() {
    
  });
});

///////////Example 5).//////////
$( ".button4" ).click(function() {
  $( ".pat" ).toggle();
});

/////////Example 6)./////////
$( ".button5" ).click(function() {
  $( "div.pick" ).slideUp( 100 ).delay( 600 ).fadeIn( 200 );
  $( "div.pick" ).slideUp( 100 ).fadeIn( 300 );
});

///////Example 7). //////////
$( ".button6" ).dblclick(function() {
  $( ".bop" ).css("background-color","yellow");
});

//////Example 8). /////////

$( ".button7" ).click(function() {
  $( ".beep" ).animate({
  	opacity: 0.6,
   }, 1500 );
});

/////Example 9).//////
$( ".button8" ).click(function( event ) {
  alert( event.type ); 
});

////Examples 10 and 11//////////
$('.button9').click(function() {
$('.example1').before("<p>then!</p>");
});

$('.button9').click(function() {
$('.example1').after("<p>now!</p>");
});

/////Example 12).//////
$( ".button11" ).click(function() {
  $( "div.dela" ).slideUp( 100 ).delay( 500 ).fadeIn( 900 );
 
});

/////Example 13.)///////
$( ".button12" ).click(function() {
  $( ".fadt" ).fadeTo( "fast", 0.45 );
});

/////Example 14).//////
$(".button13").click(function(){
	$("div.down").slideDown(slow);
});


/////Example 15).//////Not Finished!
$( "#go" ).click(function() {
  $( ".op" ).animate({ left: "+=100px" }, 2000 );
});
 
$( "#stop" ).click(function() {
  $( ".op" ).stop();
});
 
$( "#back" ).click(function() {
  $( ".op" ).animate({ left: "-=100px" }, 2000 );
});

