/* global $ */
$(document).ready(function() {
var current=0;

function nextQuestion() {
   var next = current + 1;
    var currentSel = '.question' + current;
   var nextSel ='.question' + next;
   
   $(currentSel).hide();
   $(nextSel).show();
   
   current+= 1;
}

$('.selection').click(function() {
    nextQuestion();
});
    
});
