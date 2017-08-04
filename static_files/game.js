wrongcounter = 8;
correctcounter = 0;
user_score = 0;

function myFunction(word, event) {
  var y = event.target;
  $(y).prop("disabled", true);
  if ($(y).val() == "hintclicked") {
    $("#hint").hide()
    $("#hintrevealed").show()
  } else {
    $(y).addClass("NoClick");
    var x = event.target.value; // .id gets the button id
    var res = $("#correctguess").html().concat(x);
    var rightwrong = word.indexOf(x.toLocaleLowerCase());
    $("#wrongguess").html("Wrong Guess!");
    $("#wrongguess").hide()


    if (rightwrong >= 0) {
      for (i = 0; i < word.length; i++) {
        if (x.toLocaleLowerCase() == word.charAt(i)) {
          correctcounter += 1;
          var guess = $("#correctguess").html();
          var final = guess.substring(0, i * 3) + " " + x + " " + guess.substring((i + 1) * 3, guess.length);
          $("#correctguess").html(final);
        }
      }
    } else {
      $("#wrongguess").show();
      wrongcounter -= 1;
      $("#lives").html(wrongcounter);


      if (wrongcounter == 7) {
        $("#original").hide();
        $("#head").show();

      } else if (wrongcounter == 6) {
        $("#head").hide();
        $("#body").show();

      } else if (wrongcounter == 5) {
        $("#body").hide();
        $("#leftarm").show();
      } else if (wrongcounter == 4) {
        $("#leftarm").hide();
        $("#rightarm").show();
      } else if (wrongcounter == 3) {
        $("#rightarm").hide();
        $("#rightleg").show();
      } else if (wrongcounter == 2) {
        $("#rightleg").hide();
        $("#leftleg").show();
      } else if (wrongcounter == 1) {
        $("#leftleg").hide();
        $("#eyes").show();
      } else {
        $("#eyes").hide();
        $("#sadface").show();
        $("#wrongguess").html("GAME OVER!");


      }


    }
  }
  console.log(word.length);
  console.log(correctcounter);
  if (correctcounter == word.length) {
    $("#winner").html("You Win!");
    $("#form").show();
    user_score = wrongcounter;
    console.log(user_score);
    $('#gettingscore').val(user_score);

  }
}

$(document).ready(function() {
  function initialize(event) {
    myFunction(word, event)
  }
  $("#lives").html(wrongcounter);
  cssi_list = ["CSSI Names", "rose", "monica", "christi", "fausto", "kevin", "oge", "gonzalo", "makenna", "amelia", "melissa", "patrycja", "luke", "andrew", "nicole", "marcelo", "jorge", "jigar", "harsh", "ivana", "david", "dimitri", "stevie", "spratt", "francesca", "courtney", "francisco", "andy"];
  animals_list = ["Animals", "alligator", "camel", "cheetah", "chimpanzee", "crocodile", "dolphin", "elephant", "giraffe", "goldfish", "kangaroo", "octopus", "panda", "scorpion", "squirrel", "zebra", "turtle"];
  fruits_list = ["Fruits", "apple", "banana", "cherry", "strawberry", "watermelon", "peach", "pineapple", "grapes", "tangerine"];
  disney_list = ["Disney Characters", "cinderella", "mulan", "rapunzel", "belle", "ariel", "pocahontas", "jasmine", "tiana", "anna", "elsa", "goofy", "tigger", "pluto"];
  cities_list = ["U.S Cities", "atlanta", "chicago", "austin", "boston", "denver", "seattle", "detroit", "indianapolis", "houston", "baltimore", "minneapolis", "philadelphia", "phoenix", "columbus", "nashville", "jacksonville", "dallas", "memphis", "miami", "orlando", "milwaukee", "portland", "tucson", "cleveland", "tampa", "cincinnati", "omaha"]
  states_list = ["U.S States", "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "ohio", "oklahoma", "oregon", "pennsylvania", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "wisconsin", "wyoming",]
  all_lists = [cssi_list, animals_list, fruits_list, disney_list, cities_list, states_list];
  picklist = Math.round((Math.random() * (all_lists.length - 1)));
  list_in_play = all_lists[picklist];
  $("#category").html(list_in_play[0].toString());
  var number = Math.round((Math.random() * (list_in_play.length - 1) + 1));
  var word = list_in_play[number];
  var spaces = word.length;
  var i = 0;

  while (i < spaces) {
    $("#correctguess").append("__ ");
    i++;
  }

  if (wrongcounter == 8) {
    $("#hintrevealed").hide();
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



})
