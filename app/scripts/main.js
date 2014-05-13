"use strict";


$(".button").click(function(){
	$(".click").css("background-color","grey");

});

$( "button" ).click(function() {
  $( this ).parent().slideUp( "slow", function() {
    $( "#msg" ).text( $( "button", this ).text() + " has completed." );
  });
});


$(".button").click(function(){
	$(".push").css("background-color","grey");

});