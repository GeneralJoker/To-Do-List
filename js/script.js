$(document).ready(function () {
    //Click Event
    $('#addButton').click(function () {
        $('<li><input type="text" class="text" value="' + $('#input').val() +'" readonly' + '/><span class="remove">X</span></li>').appendTo('#list');
        $('#input').val(null);
    });
    
    //Key pressed event for the enter key
    $('#input').bind("enterKey", function (e) {
        $('<li class="list-group-item"><span class="remove">X</span>' + $('#input').val() + '</li>').appendTo('#list');
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
    
});