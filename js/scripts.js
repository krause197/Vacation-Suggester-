var average = function(weather, scenery, activities) {
  return (weather + scenery + activities) / 3;
};

var kuwait = function () {
  var location = "Camp Arifjan, Kuwait";
  $("#kuwait-img").fadeToggle();
};
var baghdad = function () {
  var location = "Baghdad, Iraq";
  $("#baghdad-img").fadeToggle();
};
var erbil = function () {
  var location = "Erbil, Iraq";
  $("erbil-img").fadeToggle();
};
var afganistan = function () {
  var location = "Bagram Airfield, Afganistan";
  $("afganistan-img").fadeToggle();
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


    var questionare = function(average) {
      if (average <=1.75) {
        return kuwait;
      } else if ((average > 1.75) && (average <= 2.25)) {
          return baghdad;
      } else if ((average > 2.25) && (average <= 3.25)) {
          return erbil;
      } else {
          return afganistan;
      }
    };

    console.log(questionare);
    console.log(location);

  });
});
