$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var faveThings = ["favName", "favAnimal", "favBook", "favTvShow", "favColor", "favBand"];

    faveThings.forEach(function(thing){
      var userInput = $("input#" + thing).val();
      $("." + thing).text(userInput);
    });
  });
});
