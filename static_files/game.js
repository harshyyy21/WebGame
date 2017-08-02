function myFunction(word, event) {
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
    wrongcounter -= 1;
    $("#lives").html(wrongcounter);
    // if (wrongcounter = 8){
    //   head.show();
    // }
    // else if(wrongcounter = 7){
    //   body.show();
    // }
    // else if(wrongcounter = 6){
    //   leftarm.show();
    // }
    // else if(wrongcounter = 5){
    //   rightarm.show();
    // }
    // else if(wrongcounter = 4){
    //   leftleg.show();
    // }
    // else if(wrongcounter = 3){
    //   rightleg.show();
    // }
    // else if(wrongcounter = 2){
    //   eyes.show();
    // }
    // else{
    //   mouth.show();
    }
  }




$(document).ready(function() {
  function initialize(event){
    myFunction(word, event)
  }
  var word_list = ["rose","monica","christi","fausto","kevin","oge","gonzalo","makenna","amelia","melissa","patrycja","luke","andrew","nicole","marcelo","jorge","jigar","harsh","ivana","david","dimitri","stevie","spratt","francesca","courtney","francisco","andy"];
  var number = Math.round((Math.random()*word_list.length));
  var word = word_list[number];
  console.log(number)
  var spaces = word.length;
  console.log(word + spaces)
  var i = 0;

  while (i < spaces) {
    $("#correctguess").append("__ ");
    i++;
  }

  $("button").click(initialize);

})
