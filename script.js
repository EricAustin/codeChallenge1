console.log('script.js sourced!');
var clicked = 0


$(document).ready(function () {

    $('#generate').on('click', function () {
        clicked++
        $('#bigDiv').append('<div><p>Button has been clicked ' + clicked + ' times</p><button id="swap">swap</button><button id="delete">delete</button></div>');
    });


});