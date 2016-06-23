var questionare = function(average) {
  if (average <=1.75) {
    return kuwait
  } else if ((average > 1.75) && (average <= 2.25)) {
      return baghdad
  } else if ((average > 2.25) && (average <= 3.25)) {
      return erbil
  } else {
    return afganistan
  }
};

$(document).ready(function() {
  $("form#questionare").submit(function(event) {
    var name = $("input#name").val();
    var home = $("input#home").val();
    var age = parseInt($("input#age").val());
    var weather = parseInt($("input:radio[name=weather]:checked").val());
    var scenery = parseInt($("input:radio[name=scenery]:checked").val());
    var activities = parseInt($("input:radio[name=activities]:checked").val());
    var average = (weather+scenery+activities)/3;
    console.log(weather);
    console.log(scenery);
    console.log(activities);
    console.log(average);

    event.preventDefault();

  });
});
