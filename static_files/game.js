var word_list;
var word;
var spaces;


function myFunction(event){
  var x = event.target.value;
  var res = $("#correctguess").html().concat(x);
  var rightwrong = word.indexOf(x.toLocaleLowerCase());
  if(rightwrong >= 0){
    var guess = $("#correctguess").html();
    var final = guess.substring(0, rightwrong*3) + " " + x + " " + guess.substring((rightwrong+1) *3,  guess.length);
    $("#correctguess").html(final);
  }
  else{

  }
 }


$(document).ready(function(){
  word_list = ["cat", "cheat"]
  word = "cheat"
  spaces = word.length;
  var i = 0;

  while(i < spaces){
  $("#correctguess").append("__ ");
    i++;
  }

  $("button.letter").click(myFunction);

}
)
