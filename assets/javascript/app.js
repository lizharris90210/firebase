$(document).ready(function() {
// moment.js to calculate minutes away next train run from current time
var moment = require('moment');
console.log(moment.locale());
moment.locale('cs');
// updates minutes away every minute
moment().seconds(30).valueOf() === new Date().setSeconds(30);
moment().seconds()   === new Date().getSeconds();
    $("#searchInput").on("click", function() {
// on click append input text to train table
    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(addTrainToTable) {
        var input = $("#searchInput").val()
        console.log(input)
        var newTrainRow = $("<tr>")
          .text(input)
          .addClass("newTableRow")
        console.log('newTrainRow')
        var newTrainScope = $("<th scope>")
          .text(input)
          .addClass("trainName")
        var newTD = $("<td>")
          .addClass=("destination")
          .addClass=("frequency")
          .addClass=("nextArrival")
          .addClass=("minutesAway")
           
        $("<tBody>").append(newTrainRow, newTrainScope, newTD);
    });
});
});