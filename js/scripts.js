
$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();

    // Collect name input.
    var name =
    $("#name").val();

    //Convert name input to a Title Case.
    var nameToString = [];
    var nameToTitleCase = [];
    nameToString = name.split(" ");
    for (index = 0; index < nameToString.length; index ++) {
      singleWord = (nameToString[index]).charAt(0).toUpperCase() + ((nameToString[index]).substring(1)).toLowerCase();
      nameToTitleCase.push(singleWord);
      var resultName = nameToTitleCase.join(" ");
    };

    //Collect number input and convert to an integer.
    var number = parseInt(
    $("#number").val());

    //Create an array of numbers from 0 to input number.
    var allNumbers = []
    var index
    for (index = 0; index <= number; index ++) {
      allNumbers.push(index);
    };

    //Convert each integer in an array to a string, evaluate if it includes 3, 2, or 1, and push results into another array.
    var singleNumber = [];
    var singleNumberToString = [];
    var singleNumberToStringSplit = [];
    var modifiedAllNumbers = []
    for (index = 0; index <=number; index ++) {
        singleNumber = (allNumbers[index]);
        singleNumberToString = singleNumber.toString();
        singleNumberToStringSplit = singleNumberToString.split("");
        if (singleNumberToString.includes("3")) {
        modifiedAllNumbers.push("Beep!");
      } else if (singleNumberToString.includes("2")) {
        modifiedAllNumbers.push("Boop!");
      } else if (singleNumberToString.includes("1")) {
        modifiedAllNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
      } else {
        modifiedAllNumbers.push([index]);
      }
    }

    //Separate array elements with a comma and space.
    var resultNumbers = modifiedAllNumbers.join(", ");

    //Display results.
    $("#result-section").show();
    $("#result-text").html(resultName+","+"<br>"+"Here is your result:<br>"+resultNumbers+".");

  });
});
