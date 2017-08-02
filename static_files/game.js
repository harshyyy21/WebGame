var word_list = ["rose","monica","christi","fausto","kevin","oge","gonzalo","makenna","amelia","melissa","patrycja","luke","andrew","nicole","marcelo","jorge","jigar","harsh","ivana","david","dimitri","stevie","spratt","francesca","courtney","francisco","andy"];
var number = Math.round((Math.random()* word_list.length-1));
var word = word_list[number];
var spaces = word.length;
var counter = 9
var i = 0;
var string1 = "";
while (i < spaces) {
  string1 += "__ ";
  i++;
}


function myFunction(event) {
  var x = event.target.value; // .id gets the button id
  var res = $("#correctguess").html().concat(x);
  var rightwrong = word.indexOf(x.toLocaleLowerCase());
  $("#wrongguess").html("Wrong Guess!");
  $("#wrongguess").hide()
  if (rightwrong >= 0) {
    for (i = 0; i < word.length; i++) {
      if (x.toLocaleLowerCase() == word.charAt(i)) {
        var guess = $("#correctguess").html();
        var final = guess.substring(0, i * 3) + " " + x + " " + guess.substring((i + 1) * 3, guess.length);
        $("#correctguess").html(final);
      }
    }
  } else {
    $("#wrongguess").show();
    counter -= 1;
    $("#lives").html(counter);
  }
}



$(document).ready(function() {
  var word_list = ["rose","monica","christi","fausto","kevin","oge","gonzalo","makenna","amelia","melissa","patrycja","luke","andrew","nicole","marcelo","jorge","jigar","harsh","ivana","david","dimitri","stevie","spratt","francesca","courtney","francisco","andy"];
  var number = Math.round((Math.random()*word_list.length-1));
  var word = word_list[number];
  var spaces = word.length;
  var i = 0;

  while (i < spaces) {
    $("#correctguess").append("__ ");
    i++;
  }

  $("button").click(myFunction);

})
