// console.log('script.js sourced!');
var clicked = 0


$(document).ready(function () {

    // event handlers

    $('#generate').on('click', function () {
        clicked++
        $('#bigDiv').append('<div class="generated"> <p>Button has been clicked ' + clicked + ' times</p><button class="swap">swap</button><button class="delete">delete</button></div>');
        // console.log('generate clicked');
    });

    $(document).on('click', '.delete', function () {
        $(this).closest('div').remove();

        // console.log('delete clicked');
    });

    $(document).on('click', '.swap', function () {
        $(this).closest('div').css('background-color', function () {
            // console.log($(this).css("background-color"));
            if ($(this).css("background-color") == "rgb(255, 0, 0)") {
                // console.log('background is red');
                $(this).css("background-color", "yellow")
            } else if ($(this).css("background-color") == "rgb(255, 255, 0)") {
                // console.log('background is yellow');
                $(this).css("background-color", "red")
            }

        });

        // console.log('swap clicked');
    });

});