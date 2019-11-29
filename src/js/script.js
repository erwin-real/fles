$(document).ready(function () {

    $("#maxItemsBtn").click(function () {
        $('.items-holder').empty();

        for (var i = 1; i <= $("#maxItems").val(); i++)
            $('.items-holder').append('<label>' + i + '.)</label> <textarea name="items[]" cols="80" rows="1"></textarea><br />');
    });

    $("#clrMaxItemsBtn").click(function () { $('.items-holder').empty(); });
    $("#clrMaxStudentsBtn").click(function () { $('.scores-holder').empty(); });

    $("#maxStudentsBtn").click(function () {
        $('.scores-holder').empty();

        for (var i = 1; i <= $("#maxStudents").val(); i++)
            $('.scores-holder').append('<label>Student ' + i + ':</label> <input type="number" name"scores[]" placeholder="Score of student ' + i + '"><br />');

        $('.scores-holder').append('<button id="scoreBtn" type="button">Submit</button>');

        $("#scoreBtn").click(function () {
            $('.distributed-scores-holder').append('')
        });
    });


});