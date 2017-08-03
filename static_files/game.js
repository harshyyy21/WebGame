wrongcounter =8;
correctcounter = 0;
user_score = 0;
function myFunction(word, event) {
  var y = event.target;
  $(y).prop("disabled", true);
  $(y).addClass("NoClick");
  var x = event.target.value; // .id gets the button id
  var res = $("#correctguess").html().concat(x);
  var rightwrong = word.indexOf(x.toLocaleLowerCase());
  $("#wrongguess").html("Wrong Guess!");
  $("#wrongguess").hide()


  if (rightwrong >= 0) {
    for (i = 0; i < word.length; i++) {
      if (x.toLocaleLowerCase() == word.charAt(i)) {
        correctcounter +=1;
        var guess = $("#correctguess").html();
        var final = guess.substring(0, i * 3) + " " + x + " " + guess.substring((i + 1) * 3, guess.length);
        $("#correctguess").html(final);
      }
    }
  }

  else {
    $("#wrongguess").show();
    wrongcounter -= 1;
    $("#lives").html(wrongcounter);


    if (wrongcounter == 7){
      $("#original").hide();
      $("#head").show();

    }

    else if(wrongcounter == 6){
      $("#head").hide();
      $("#body").show();

    }

    else if(wrongcounter == 5){
      $("#body").hide();
      $("#leftarm").show();
    }

    else if(wrongcounter == 4){
      $("#leftarm").hide();
      $("#rightarm").show();
    }

    else if(wrongcounter ==3){
      $("#rightarm").hide();
      $("#rightleg").show();
    }

    else if(wrongcounter == 2){
      $("#rightleg").hide();
      $("#leftleg").show();
    }

    else if(wrongcounter == 1){
      $("#leftleg").hide();
      $("#eyes").show();
    }

    else{
      $("#eyes").hide();
      $("#sadface").show();
      $("#wrongguess").html("GAME OVER!");


    }


  }
  if (correctcounter == word.length){
    $("#winner").html("You Win!");
    $("#form").show();
    user_score = wrongcounter;
    $('#gettingscore').val(user_score);

  }
}

$(document).ready(function() {
  function initialize(event){
    myFunction(word, event)
  }
  $("#lives").html(wrongcounter);
  var word_list = ["rose","monica","christi","fausto","kevin","oge","gonzalo","makenna","amelia","melissa","patrycja","luke","andrew","nicole","marcelo","jorge","jigar","harsh","ivana","david","dimitri","stevie","spratt","francesca","courtney","francisco","andy"];
  var number = Math.round((Math.random()*word_list.length));
  var word = word_list[number];
  var spaces = word.length;
  var i = 0;

  while (i < spaces) {
    $("#correctguess").append("__ ");
    i++;
  }

  if (wrongcounter == 8 ){
    $("#form").hide();
    $("#hidescore").hide();
    $("#original").show();
    $("#head").hide();
    $("#body").hide();
    $("#leftarm").hide();
    $("#rightarm").hide();
    $("#rightleg").hide();
    $("#leftleg").hide();
    $("#eyes").hide();
    $("#sadface").hide();

    }

  $("button").click(initialize);



}
)
