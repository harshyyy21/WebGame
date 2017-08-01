
function myFunction(event){
  var x = event.target.value;
  var res = $("#correctguess").html().concat(x);
  $("#correctguess").html(res);
 }

// function checkGuess(){
//    for()
// }

$(document).ready(function(){
  var word_list = ["cat"]
  var word = "cat"
  var spaces = word.length;
  var i = 0;

  while(i < spaces){
  $("#spaces").append("__ ");
    i++;
  }
  $("button").click(myFunction);
}
)
