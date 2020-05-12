// Je cible mon bouton masqué grâce à son ID. Et je lui rajoute un évènement au clique.
// au clique sur mon bouton, je cache mon texte qui a l'ID 'text'.
$(function(){
  $("#hide").click(function(){
    $("#text").hide();
  });
// Je cible mon bouton masqué grâce à son ID. Et je lui rajoute un évènement au clique.
// au clique sur mon bouton, j'affiche mon texte qui a l'ID 'text'.
  $("#show").click(function(){
    $("#text").show();
  });
});
