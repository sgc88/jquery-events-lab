/*
  What needs to change so that the page says "Go!"?
*/
var go = false;

$(document).ready(function(){
  $("h1").text("Go!");

if ( go === true){
  console.log( "The page says:", $("h1").text() );
  
} else {
  $("<div>'Go!'</div");
}
});