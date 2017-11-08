var factorial = function(input) {
  total = 1;
  for (i = 2; i <= input; i++) {
    total = total * i;
  }
  return total;
}

$(document).ready(function() {
  $("#factorial").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var result = factorial(input);
    console.log(result);
  });
});
