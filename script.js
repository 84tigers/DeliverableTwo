
// Ex 1

// function myFunction(numberz) {
function numberz() {
var question = "Gimme a number!!!";
var userNum = prompt(question);
var total = 0;
  for (var i = 0; i <= userNum; i++) {
    total += i;
  }
alert('Ummmm, that would equal ' + total + ' thingies.');
}
// }

// Ex 2

function wordz() {
  var repeat, wordArr = [];

      do {

      wordArr.push(prompt("Enter a word: "));
      repeat = prompt ("Do you want to enter another word: y/n");

      } while (repeat !== 'n' && repeat !== 'N');

  alert(wordArr.join("\n"));

}

// Ex 3

// var repeat, wordArr = [];
// /* var exNum = wordArr.length
//  */var exclaim = '!';
//  if (prompt(repeat) !== 'n' && repeat !== 'N');
//       while (repeat !== 'n' && repeat !== 'N' && wordArr !== false){
//           wordArr.push(prompt("Enter your name: "));
//               repeat = prompt ("Do you want to print your name : y/n");
//
//       }
//       alert('your name is ' + wordArr[0] + ' ' + (wordArr.length) * exclaim);
// /*       alert(wordArr.join('\n') + "\n" + repeat); */
//
// // Ex 4

function getOption() {
    var timeOfDay = document.getElementById('userChoice');
    var mealType = ['breakfast', 'lunch', 'dinner'];
    var foodSugg = ['eggs and toast.', 'a salad.', 'chicken and rice.'];
    	switch (timeOfDay) {
        case 2:
        alert("Since it's morning, you should be eating " + mealType[0] + ". We suggest " + foodSugg[0]);
        break;
        case 3:
        alert("Since it's morning, you should be eating " + mealType[0] + ". We suggest " + foodSugg[0]);
        break;
        case 4:
        alert("Since it's morning, you should be eating " + mealType[0] + ". We suggest " + foodSugg[0]);
        break;
        default:
        alert("INVALID CHOICE");
        }

    /* document.getElementById("demo").innerHTML =
    obj.options[obj.selectedIndex].text; */
}
