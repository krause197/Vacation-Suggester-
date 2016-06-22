






$(document).ready(function() {
  $("form#demographics").submit(function(event) {
    var name = $("input#name").val();
    var home = $("input#home").val();
    var age = $ parseInt(("input#age").val());


    event.preventDefault();


    alert(result);
  });
});
