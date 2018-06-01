$(function(){
  $("#formOne").submit(function(event) {

    var jobs = parseInt($("input:radio[name=jobs]:checked").val());
    var difficult = parseInt($("input:radio[name=difficult]:checked").val());
    var speed = parseInt($("input:radio[name=speed]:checked").val());
    var popular = parseInt($("input:radio[name=popular]:checked").val());
    var tools = parseInt($("input:radio[name=tools]:checked").val());
    var fundamentals = parseInt($("input:radio[name=fundamentals]:checked").val());

    var add = jobs + difficult + speed + popular + tools + fundamentals;

    if (add > 39) {
      $('#js').show();
      $('#csharp').hide();
      $('#ruby').hide();
    } else if (add < 16){
      $('#ruby').show();
      $('#js').hide();
      $('#csharp').hide();
    } else {
      $('#csharp').show();
      $('#js').hide();
      $('#ruby').hide();
    }
    event.preventDefault();
  });
});
