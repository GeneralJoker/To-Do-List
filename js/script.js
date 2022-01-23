$(document).ready(function () {
    //Click Event
    $('#addButton').click(function () {
        $('<li class="list-group-item"><span class="remove">X</span>' + $('#input').val() + '</li>').appendTo('#list');
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
    

});