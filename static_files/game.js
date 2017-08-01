
function myFunction(event){
  var x = event.target.value;
  var res = $("#correctguess").html().concat(x);
  var word = "cat";
  var rightwrong= word.indexOf(x.toLocaleLowerCase());
  if (rightwrong >= 0){
  $("#correctguess").html(res);
 }
 }

// function checkGuess(){
//    for()
// }

$(document).ready(function(){
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
