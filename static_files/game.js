function myFunction(event){
  var x = event.target.value;
  $("#demo").html(x) = x;
  console.log(x)
  console.log(event.target)
 }


$(document).ready(function(){

  $("button").click(myFunction);
}
)
