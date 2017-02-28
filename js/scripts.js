$(document).ready(function() {
  $("#favForm form").submit(function(event){
    var name = $("input#name").val();
    var animal = $("input#animal").val();
    var book = $("input#book").val();
    var tvShow = $("input#tvShow").val();
    var color = $("input#color").val();
    var band = $("input#band").val();

    var favThings = [name, animal, book, tvShow, color, band];

    $(".favName").text(favThings[0]);
    $(".favAnimal").text(favThings[1]);
    $(".favBook").text(favThings[2]);
    $(".favTvShow").text(favThings[3]);
    $(".favColor").text(favThings[4]);
    $(".favBand").text(favThings[5]);

    var newArray = favThings.slice(0,3);

     console.log(newArray);

    $(".arrayAnimal").text(newArray[0]);
    $(".arrayBook").text(newArray[1]);
    $(".arrayColor").text(newArray[2]);

  event.preventDefault();
  });
});
