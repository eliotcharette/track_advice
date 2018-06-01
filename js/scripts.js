$(function(){
  $("#formOne").submit(function(event) {


    var marriage = parseInt($("input:radio[name=marriage]:checked").val());

    var healthcare = parseInt($("input:radio[name=healthcare]:checked").val());

    var breitbart = parseInt($("input:radio[name=breitbart]:checked").val());

    var add = marriage + healthcare + breitbart;

      if (add > 11) {
        $('#js').show();
        $('#liberal').hide();
      } else if{
        $('#liberal').show();
        $('#conservative').hide();
      }


    event.preventDefault();
  });
});
