$(document).ready(function () {
    //Click Event
    $('#addButton').click(function () {
        $('<li class="list-group-item"><span class="remove">X</span>' + $('#input').val() + '</li>').appendTo('#list');
        $('#input').val(null);
    });


});