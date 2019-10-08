$(document).ready(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCWAwWAY7Zl09i783ZDQiz1VmuINSO8O-Y",
    authDomain: "lizharris90210-3dfcd.firebaseapp.com",
    databaseURL: "https://lizharris90210-3dfcd.firebaseio.com",
    projectId: "lizharris90210-3dfcd",
    storageBucket: "lizharris90210-3dfcd.appspot.com",
    messagingSenderId: "250288061688",
    appId: "1:250288061688:web:03fdd5edb01dbd52f90f0d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
    var newArray = Object.keys(snapshot.val());
    console.log(newArray);
    $(newTrainRow).append(destination);
    $("tbody").append(newTrainRow);
  });

  // moment.js to calculate minutes away next train run from current time
  function timeDate(frequency, firstTrainTime) {
    // make a clock with current time and date
    console.log(frequency);
    console.log(firstTrainTime);
    var now = moment().format("LLLL");
    var dateFormat = "HH:mm";
    var convertedDate = moment(firstTrainTime, dateFormat);
    var convertedDateNow = moment(now, dateFormat);
    var convertedDiff = convertedDateNow.diff(convertedDate, "minutes");
    console.log(convertedDiff);
    $(".timeDate").append(now);
  }
  timeDate(60, "12:00");

  // updates minutes away every minute
  moment()
    .seconds(30)
    .valueOf() === new Date().setSeconds(30);
  moment().seconds() === new Date().getSeconds();

  $("#submitButton").on("click", function() {
    // on click append input text to train table
    var newTrainRow = $("<tr>");
    var searchTrain = $("#searchTrain").val();
    console.log(searchTrain);
    var searchTrainElement = $("<td>")
      .text(searchTrain)
      .addClass("newTableRow");
    $(newTrainRow).append(searchTrainElement);
    $("tbody").append(newTrainRow);

    var searchDestination = $("#searchDestination").val();
    console.log(searchDestination);
    var searchTrainElement = $("<td>")
      .text(searchDestination)
      .addClass("newTrainRow");
    $(newTrainRow).append(searchTrainElement);
    $("tbody").append(newTrainRow);

    var searchFrequency = $("#searchFrequency").val();
    console.log(searchFrequency);
    var searchTrainElement = $("<td>")
      .text(searchFrequency)
      .addClass("newTrainRow");
    $(newTrainRow).append(searchTrainElement);
    $("tbody").append(newTrainRow);

    var searchTrainTime = $("#searchTrainTime").val();
    console.log(searchTrainTime);
    var searchTrainElement = $("<td>")
      .text(searchTrainTime)
      .addClass("newTrainRow");
    $(newTrainRow).append(searchTrainElement);
    $("tbody").append(newTrainRow);

    var minutesAway = $("#minutesAway").val();
    var searchTrainElement = $("<td>")
      .text("0")
      .addClass("newTrainRow");
    $(newTrainRow).append(searchTrainElement);
    $("tbody").append(newTrainRow);

    database.ref().push({
      name: searchTrain,
      destination: searchDestination,
      firstTrainTime: searchTrainTime,
      frequency: searchFrequency
    });
  });
});
