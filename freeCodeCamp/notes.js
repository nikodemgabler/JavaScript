// var a;
// var b = 2;
// console.log (a)
// a = 4;
// b = a;

// console.log(b);


// Initializing Variables w/ Assignment Operator
 var a = 5;
 var b = 10;
 var c = "I am a ";

//  Do not change code below this line

a = a + 1;
b = b + 5;
c = c + "String!"
 
// console.log(a,b,c)

// CASE SENSITIVITY IN VARIABLES  - IN VARIABLES CAPITALIZATION MATTERS !!!!!!
// Declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Assignments - 
sTUDYLYCAPVAR = 10; // it wont find my variable
properCamelCase = "A String";
TitleCaseOver = 9000;





// ADDING NUMBERS
var sum = 10 + 10
// console.log(sum)

// SUBTRACTING NUMBERS
var difference = 45 - 33;
// console.log(difference);

// MULTIPLYING NUMBERS
var product = 8 * 10;
// console.log(product)

// DIVIDING NUMBERS
var quotient = 66 / 33;
// console.log(quotient);

// INCREMENTING NUMBERS
var myVar = 87;
myVar++;  //myVar++ = myVar + 1
// console.log(myVar);

// DECREMENTING NUMBERS
var mySecondVar = 11;
mySecondVar--;
// console.log(mySecondVar);

// DECIMAL NUMBERS
var ourDecimal = 5.7;
var myDecimal = 0.009;


// MULTIPLY DECIMALS
var product = 2.0 * 2.5;
// console.log(product);

// DIVIDE DECIMALS
var quotient = 4.4 / 2.0;
// console.log(quotient);

// FINDING A REMAINDER [%] - it gives the remainder of the division of two numbers. - Reszta z dzielenia dwóch liczb
var remainder;
remainder = 11 % 3;
// console.log(remainder)
// It is often used to determine if a number is even or odd - if you can divde a number by 2 and the remainder is 0, that means the number is even.


// COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION 
var a = 3;
var b = 17;
var c = 12;

a += 12; // a = a + 12;
b += 9; // 9 + b;
c += 7; // c + 7;
// console.log(c);


// COMPOUND ASSIGNMENT WITH AUGMENTED SUBTRACTION
var a = 11;
var b = 9;
var c = 3;

a -= 6 //a - 6
b -= 15 // b - 15
a -= 1 // a - 1
// console.log(b);

// COMPOUND ASSIGNMENT WITH AUGMENTED MULTIPLICATION
var a = 5;
var b = 12;
var c = 4.6;

a *= 5; // a * 5
b *= 16 // b * 16
c *= 10 // c * 10
// console.log(c);

// COMPOUND ASSIGNMENT WITH AUGMENTED DIVISION
var a = 48;
var b = 108;
var c = 33;

a /= 2 // a / 2
b /= 4 // b / 4
c /= 3 // c / 3
// console.log(c);


// DECLARE STRING VARIABLES
var firstName = "Nikodem";
var LastName = "Gabler"
var myFirstName ="Beau";
var myLastName = "Carnes";


// ESCAPING LITERAL QUOTES IN STRINGS
 var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
//  console.log(myStr);

// QUOTING STRINGS WITH SINGLE QUOTES
var myStr = '<a href="https://www.example.com" target="_blank">Link</a>';
var myStr = `'<a href="https://www.example.com" target="_blank">Link</a>'`; // Now i can use single and double quote in one string


// ESCAPE SEQUENCES IN STRINGS
/*****
CODE  OUTPUT
\'    single quote 
\"    double quote
\\    backlash
\n    newline
\r    carriage return
\t    tab
 \b   backspace
 \f   form freed
 *****/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
var myStr = `"fIRSTlINE\n\tSecondLine\nThridLine\\WII\nFourthLine\rBlablabla\bFlofloflo\fFofo"`
// console.log(myStr);


// CONCATENATING STRINGS WITH PLUS OPERATOR
var myStr = "This is the start. " + "This is the end"
// console.log(myStr);


// CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
var ourStr = "I come first."
ourStr += " I come second.";
// console.log(ourStr);

var myStr = 'This is the first sentence. '
myStr += 'This is the second sentence.'
// console.log(myStr);


// CONSTRUCTING STRINGS WITH VARIABLES
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Nikodem";
var myStr = "My name is " + myName + " and I am well"

// console.log(ourStr);
// console.log(myStr);


// APPENDING VARIABLES TO STRINGS
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// console.log(ourStr);

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;
// console.log(myStr);


// FIND LENGTH OF STRING
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
// console.log(firstNameLength);
// console.log(lastNameLength);


// BRACKET NOTATION TO FIND FIRST CHARACTER IN STRING
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
// console.log(firstLetterOfFirstName);
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName;


// STRING IUMMUTABILITY - they connot be altered once created (individual characters of a string literal cannot be changed)
var myStr = "Jello World"

myStr[0] = "H"; // it is wrong 
myStr = "Hello World" // we have to change it in this way
// console.log(myStr);

// BRACKET NOTATION TO FIND Nth CHARACTER IN STRING
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace"

var thirdLetterOfLastName = lastName[2];
// console.log(secondLetterOfFirstName);


// BRACKET NOTATION TO FIND LAST CHARACTER IN STRING
 var firstName = "Ada"
 var lastLetterOfFirstName = firstName[firstName.length - 1];  // 3 - 1 = 2 - but [2] is like [3] so it's importnant to pay attantion for it
//  console.log(lastLetterOfFirstName); 

// BRACKET NOTATION TO FIND nth-to-Last CHARACTER IN STRING
// 3-rd to last letter
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
// console.log(thirdToLastLetterOfFirstName);
// 2-nd to last letter
var lastName = "Ada";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
// console.log(secondToLastLetterOfLastName);


// WORD BLANKS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The "+ myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

    return result;
}
// console.log(wordBlanks("dog", "big", "ran", "quickly"));
// console.log(wordBlanks("bike", "slow", "flew", "slowly"));


// STORE MULTIPLE VALUES WITH ARRAYS
var ourArray = ["John", 23] // every element in the array is separated by a comma.
var myArray = ["Quincy", 1];
// console.log(ourArray);


// NESTED ARRAYS
var ourArray = [["the universe", 42], ["everything, 101010"]];
var myArray = [["Bulls", 23], ["White Sox", 45]];
// console.log(myArray);


// ACCESS ARRAY DATA WITH INDEXES
var ourArray = [50, 60, 70];
var ourData = ourArray [0]; // equals 50

var myArray = [50,60,70];
var myData = myArray[2];
// console.log(myData);


// MODIFY ARRAY DATA WITH INDEXES - With arrays we can edit particular elements
var ourArray = [18, 64, 99];
ourArray[1] = 45; //ourArray now equals [18, 45, 99]
// console.log(ourArray)


// ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];

var myData = myArray[2][1]; // = 8 [2 = third array [7,8,9] and second [1] = number of element in this Array]
// console.log(myData);

var myData = myArray[3][0][0]; // [3] = 4th array [0] = 1st array [0] = 1st element in first array in fourth array
console.log(myData);


// MANIPULATE ARRAYS WITH push();
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

myArray = [["John", 23], ["cat", 2]];

