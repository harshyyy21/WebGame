var word_list = ["cat", "cheat"];
var word = "cheat";
var spaces = word.length;
var i = 0;
var string1 = "";
while(i < spaces){
  string1 += "__ ";
  i++;
}


function myFunction(event){
  var x = event.target.value;
  var res = $("#correctguess").html().concat(x);
<<<<<<< HEAD
  var word = "cat";
  var rightwrong= word.indexOf(x.toLocaleLowerCase());
  if (rightwrong >= 0){
  $("#correctguess").html(res);
=======
  var rightwrong = word.indexOf(x.toLocaleLowerCase());
  if(rightwrong >= 0){
    var guess = $("#correctguess").html();
    var final = guess.substring(0, rightwrong*3) + " " + x + " " + guess.substring((rightwrong+1) *3,  guess.length);
    $("#correctguess").html(final);
  }
>>>>>>> f48aa62f0c7caa060604e76c4eadf1f813065187
 }
 }


$(document).ready(function(){
<<<<<<< HEAD
  var word = "cat"
=======
  var word_list = ["cat", "cheat"]
  var word = "cheat"
>>>>>>> f48aa62f0c7caa060604e76c4eadf1f813065187
  var spaces = word.length;
  var i = 0;

  while(i < spaces){
  $("#correctguess").append("__ ");
    i++;
  }

  $("button").click(myFunction);

}
)
