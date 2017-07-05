// JavaScript Document test.js

$( "#sidebar" ).click(function() {
 $(document).find("#panel").toggleClass("show-panel");
 $(document).find("#panel").toggleClass("hide-panel");
});
