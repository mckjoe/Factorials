var factorial = function(input) {
  total = 1;
  for (var i = 2; i <= input; i++) {
    total *= i;
  }
  return total
}

$(document).ready(function() {
  $("#factorial").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var result = factorial(input);
    console.log(result);
    $(".output").text(result);
    $("#output").show();
  });
});
