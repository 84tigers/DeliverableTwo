
// Ex 1


function numberz() {
var question = "Gimme a number!!!";
var userNum = prompt(question);
var total = 0;
  for (var i = 0; i <= userNum; i++) {
    total += i;
  }
alert('Ummmm, that would equal ' + total + ' thingies.');
}


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


    var greeting = 'Is it morning, noon, or evening? Please choose one:'
    var timeOfDay = prompt(greeting);
    var mealType = ['breakfast', 'lunch', 'dinner'];
    var foodSugg = ['eggs and toast.', 'a salad.', 'chicken and rice.'];
    	switch (timeOfDay.toLowerCase()) {
        case ('morning'):
        alert("Since it's morning, you should be eating " + mealType[0] + ". We suggest " + foodSugg[0]);
        break;
        case ('noon'):
        alert("Since it's noon, you should be eating " + mealType[1] + ". We suggest " + foodSugg[1]);
        break;
        case ('evening'):
        alert("Since it's evening, you should be eating " + mealType[2] + ". We suggest " + foodSugg[2]);
        break;
        default:
        alert("INVALID CHOICE!\nTRY AGAIN");
        }


}
