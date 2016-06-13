$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var a = parseInt($("#a").val());
    var b = parseInt($("#b").val());
    var c = parseInt($("#c").val());
    var Equilateral = "You have an Equilateral Triangle";
    var Isosceles = "You have an Isosceles Triangle";
    var Scalene = "You have a Scalene Triangle"
    var noTriangle = "You do not have a Triangle";
    var result;
    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
      result = noTriangle;
    } else if ((a === b) && (b === c) && (a === c)) {
      result = Equilateral;
    } else if ((a === b) || (b === c) || (a === c)) {
      result = Isosceles;
    } else
      result = Scalene;

    alert(result);
  });
});
