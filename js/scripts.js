$(function(){
  $("#formOne").submit(function(event) {

    var jobs = parseInt($("input:radio[name=marriage]:checked").val());
    var difficult = parseInt($("input:radio[name=healthcare]:checked").val());
    var speed = parseInt($("input:radio[name=breitbart]:checked").val());
    var popular = parseInt($("input:radio[name=marriage]:checked").val());
    var tools = parseInt($("input:radio[name=healthcare]:checked").val());
    var fundamentals = parseInt($("input:radio[name=breitbart]:checked").val());

    var add = jobs + difficult + speed + popular + tools + fundamentals;

      if (add > 30) {
        $('#js').show();
        $('#csharp').hide();
        $('#ruby').hide();
      } else if (add > 15 < 30){
        $('#csharp').show();
        $('#js').hide();
        $('#ruby').hide();
      } else {
        $('#ruby').show();
        $('#js').hide();
        $('#csharp').hide();
      }


    event.preventDefault();
  });
});
