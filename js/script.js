$(document).ready(function () {
    //Click Event
    $('#addButton').click(function () {
        $('<li><input type="text" name="tasks" class="text" style="width:auto" value="' + $('#input').val() +'" required readonly/><button class="highPriority">High priority</button><span class="remove">X</span></li>').appendTo('#list');
        $('#input').val(null);
    });
    
    //Key pressed event for the enter key
    $('#input').bind("enterKey", function (e) {
        $('<li><input type="text" name="tasks" class="text" style="width:auto" value="' + $('#input').val() +'" required readonly/><button class="highPriority">High priority</button>><span class="remove">X</span></li>').appendTo('#list');
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
        $(".text:focus, .text:active").css("text-decoration", "line-through");
    });
    
    //High priority new feature: Move to top
    $(document).on('click', '.highPriority', function () {

          $(this).css("border-color", "red");
          $(this).parent().parent().prepend($(this).parent());

    });
    
    
    // Validation for null tasks
    $(document).ready(function() {
      $('.input-group input').on('keyup', function() {
        let empty = false;
        $('.input-group input').each(function() {
          empty = $(this).val().length == 0;
        });

        if (empty)
          $('#addButton').attr('disabled', 'disabled');
        else
          $('#addButton').attr('disabled', false);
      });
    }); 
  
    
  
});