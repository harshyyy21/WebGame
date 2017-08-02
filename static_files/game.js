var word_list = ["cat", "cheat"];
var word = "banana";
var spaces = word.length;
var i = 0;
var string1 = "";
while (i < spaces) {
  string1 += "__ ";
  i++;
}


function myFunction(event) {
  var x = event.target.value;
  var res = $("#correctguess").html().concat(x);
  var rightwrong = word.indexOf(x.toLocaleLowerCase());
  if (rightwrong >= 0) {
    for (i=0; i < word.length; i++) {
      if (x.toLocaleLowerCase() == word.charAt(i)) {
        var guess = $("#correctguess").html();
        var final = guess.substring(0, i * 3) + " " + x + " " + guess.substring((i + 1) * 3, guess.length);
        $("#correctguess").html(final);
      }
    }
  }
}


$(document).ready(function() {
  var word_list = ["cat", "cheat"]
  var word = "banana"
  var spaces = word.length;
  var i = 0;

  while (i < spaces) {
    $("#correctguess").append("__ ");
    i++;
  }

  $("button").click(myFunction);

})
