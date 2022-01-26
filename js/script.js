$(document).ready(function () {
    //Click Event
    $('#addButton').click(function () {
        $('<li><input type="text" class="text" style="width:auto" value="' + $('#input').val() +'" readonly' + '/><span class="remove">X</span></li>').appendTo('#list');
        $('#input').val(null);
    });
    
    //Key pressed event for the enter key
    $('#input').bind("enterKey", function (e) {
        $('<li><input type="text" class="text" style="width:auto" value="' + $('#input').val() +'" readonly' + '/><span class="remove">X</span></li>').appendTo('#list');
        $('#input').val(null);
    });

    $('#input').keyup(function (e) {
        if (e.keyCode == 13) {
            $(this).trigger("enterKey");
        }
    });
  
    //Removes an item when the "X" is clicked
    $(document).on('click', '.remove', function () {
        $(this).parent().remove();
    });
  
    //Strikes through an item when task is clicked
    $(document).on('click', '.text', function () {
        //$(this).parent().remove();
        // Do something extra for a completed task
        //$(".text:active").css("text-decoration", "line-through");
        $(".text:focus, .text:active").css("text-decoration", "line-through");
    });
  
    // Validation for null tasks 
    $(document).ready(function() {
      $('.text').keyup(function() {

      var empty = false;
      $('.text').each(function() {
          if ($(this).val().length == 0) {
              empty = true;
          }
      });                   

      if (empty) {
          $('button').attr('disabled', 'disabled');
      } else {
          $('button').removeAttr('disabled');
      }                
      });
    });   
  
});