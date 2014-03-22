(function() {

 // split via characters
 var $text = $('#wpm-text');
 var characters = $text.text().trim().split("");
 var nextChar = 0;

 var $temp = $('<div />');
 characters.forEach(function(val, index, arr) {
   $('<span id="char-'+index+'"/>').text(val).appendTo($temp); 
 });

 $text.empty().append($temp.children());
 $temp = null;

 // make the first one bold
 $('#char-'+nextChar).addClass('highlighted');

 $('#wpm-typing').on('click', function(ev) {

   // If the button keyboard button clicked is equal to the text in the pargraph, continue, else, return. 
   if(String.fromCharCode(ev.keyCode) === characters[nextChar]) {
     // move the cursor to the next actual character
     nextChar++;     

     $('#char-'+nextChar).addClass('highlighted');
     $(this).val('');
   } else {
     return false;
   }
 });
})();
