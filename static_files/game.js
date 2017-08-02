function myFunction(word, event) {
  var x = event.target.value; // .id gets the button id
  var res = $("#correctguess").html().concat(x);
  var rightwrong = word.indexOf(x.toLocaleLowerCase());
  var correctguess = word.length;
  $("#wrongguess").html("Wrong Guess!");
  $("#wrongguess").hide()
  if (rightwrong >= 0) {
    for (i = 0; i < word.length; i++) {
      if (x.toLocaleLowerCase() == word.charAt(i)) {
        correctguess -= 1;
        var guess = $("#correctguess").html();
        var final = guess.substring(0, i * 3) + " " + x + " " + guess.substring((i + 1) * 3, guess.length);
        $("#correctguess").html(final);
      }
    }
  } else {
    $("#wrongguess").show();
    wrongcounter -= 1;
    $("#lives").html(wrongcounter);
    if (wrongcounter = 8){
      original.hide();
      head.show();
    }
    else if(wrongcounter = 7){
      head.hide();
      body.show();
    }
    else if(wrongcounter = 6){
      body.hide();
      leftarm.show();
    }
    else if(wrongcounter = 5){
      leftarm.hide();
      rightarm.show();
    }
    else if(wrongcounter = 4){
      rightarm.hide();
      leftleg.show();
    }
    else if(wrongcounter = 3){
      leftleg.hide();
      rightleg.show();
    }
    else if(wrongcounter = 2){
      rightleg.hide();
      eyes.show();
    }
    else{
      eyes.hide();
      mouth.show();
    }
    if (correctguess == 0){
      $("#wrongguess").html("You Win!");
    }
  }




$(document).ready(function() {
  function initialize(event){
    myFunction(word, event)
  }
  var word_list = ["rose","monica","christi","fausto","kevin","oge","gonzalo","makenna","amelia","melissa","patrycja","luke","andrew","nicole","marcelo","jorge","jigar","harsh","ivana","david","dimitri","stevie","spratt","francesca","courtney","francisco","andy"];
  var number = Math.round((Math.random()*word_list.length));
  var word = word_list[number];
  var spaces = word.length;
  var i = 0;

  while (i < spaces) {
    $("#correctguess").append("__ ");
    i++;
  }

  $("button").click(initialize);

})
