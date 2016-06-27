var average = function(weather, scenery, activities) {
  return (weather + scenery + activities) / 3;
};
var questionare = function(average) {
  if (average <=1.75) {
    var location = "Camp Arifjan, Kuwait";
    $("#locationResult").show();
    $("#kuwait-img").show();
  } else if ((average > 1.75) && (average <= 2.25)) {
    var location = "Baghdad, Iraq";
    $("#locationResult").show();
    $("#baghdad-img").show();
  } else if ((average > 2.25) && (average <= 3.25)) {
    var location = "Erbil, Iraq";
    $("#locationResult").show();
    $("#erbil-img").show();
  } else {
    var location = "Bagram Airfield, Afganistan";
    $("#locationResult").show();
    $("#afganistan-img").show();
  }
};



$(document).ready(function() {
  $("form#questionare").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var home = $("input#home").val();
    var age = parseInt($("input#age").val());
    var weather = parseInt($("input:radio[name=weather]:checked").val());
    var scenery = parseInt($("input:radio[name=scenery]:checked").val());
    var activities = parseInt($("input:radio[name=activities]:checked").val());
    console.log(weather);
    console.log(scenery);
    console.log(activities);

    $("name").text(name);
    $("location").text(location);
    $("home").text(home);
  });
});
