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
console.log(firstLetterOfFirstName);
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName;


//STRING UMMUTABILITY 33:29