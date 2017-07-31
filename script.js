console.log('script.js sourced!');
var clicked = 0


$(document).ready(function () {

// event handlers

    $('#generate').on('click', function () {
        clicked++
        $('#bigDiv').append('<div class="generated"> <p>Button has been clicked ' + clicked + ' times</p><button class="swap">swap</button><button class="delete">delete</button></div>');
        console.log('generate clicked');
    });

    $(document).on('click', '.delete', function () {
        $(this).closest('div').remove();

        console.log('delete clicked');
    });


});