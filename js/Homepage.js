function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
$('.carousel').carousel({
  interval: 2
})



$(document).ready(function() {

    $("input.slider").on("input change", function(event) {
        var element = $(this).parents("div.before-after-slider ");
        var pos = event.target.value;

        element.find("div.before").css({width: pos + "%"});
        element.find("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});
    });

})

var element = $(this).parents("div.container");
var pos = event.target.value;
element.find("div.before").css({width: pos + "%"});
element.find("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});