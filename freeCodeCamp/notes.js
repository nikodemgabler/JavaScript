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
// console.log(myData);


    // MANIPULATE ARRAYS WITH push();
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 5]);
// console.log(myArray);


    // MANUPULATE ARRAYS WITH pop() - THIS REMOVES LAST ELEMENT
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// console.log(removedFromOurArray) // = 3
// console.log(ourArray); = 1,2
// removedFromOurArray now equals 3, and ourArray now equals [1.2]

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop()
// console.log(removedFromMyArray); 
// Now myArray = ['cat', 2]


    // MANIPULATE ARRAYS WITH shift() - THIS REMOVES FIRST ELEMENT
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift()
// console.log(removedFromOurArray); = "Stimpson" and ourArray = ["J", ["cat"]]

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift()
// console.log(myArray);


    // MANUPULATE ARRAYS WITH unshift() - it adds element to the beginning of the array
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Emma", 25]);
// console.log(myArray)


    // SHOPPING LIST
var myList = [["cereal", 3], ["milk", 2], ["bannanas", 3], ["juice", 2], ["eggs", 12]];


    // WRITE REUSABLE CODE WITH FUNCTIONS
// function setup
// function + function name + () - we can add here information
// { - curly bracket 
// content - that is run anytime the function is called or invoked
//}
function ourReusableFunction() {
    console.log("Heyya, World");
}
// ourReusableFunction(); // - start function

function reusableFunction() {
    console.log("Hi World");
}
// reusableFunction();


    // PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
// parameters are variables that act as place holders for the values that are to be input to a function when it is called.
// When the function is called we're going to pass data into the function.
function ourFunctionWithArgs(a, b) { 
    console.log(a - b);
}
// ourFunctionWithArgs(10,5); // = output 5
function functionWithArgs(a, b) {
    console.log(a + b);
}
// functionWithArgs(10, 5);


    // GLOBAL SCOPE AND FUNCTIONS
// Scope refers to the visibility of variables
// Variables which are defined outside of a function block have global scope
// != doesn't equal

var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5; // When in function we don't use var, then it becomes global, so in lower function we will se this element
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
// fun1();
// fun2();


    // LOCAL SCOPE AND FUNCTIONS - they are only visible inside the function
function myLocalScope() {
    var myLocalVar = 5;
    console.log(myLocalVar);
}
// myLocalScope(); = 5
// console.log(myLocalVar) = error


    // GLOBAL vs. LOCAL SCOPE IN FUNCTIONS
// It is possible to have both local and global variables with the same name.
// When you do this, the local variable takes precedent over the global variable.

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "Sweater"

    return outerWear;
}
// console.log(myOutfit()); == "Sweater" 
// console.log(outerWear); == "T-Shirt"


    // RETURN A VALUE FROM A FUNCTION WITH RETURN
function minusSeven(num) {
    return num -7;
}
// console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
// console.log(timesFive(5));


    // UNDERSTADING UNDEFINED VALUE RETURNED FROM A FUNCTION 
var sum = 0;
function addThree() {
    sum = sum + 3;
}
// addThree(); // if you don't specify a return value, the return value is just undefined

function addFive() {
    sum += 5;
}
// console.log(addFive()); // Value of this = UNDEFINED


    // ASSIGNMENT WITH A RETURNED VALUE 
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}
changed = change(10);
// console.log(changed) // = 15 = (10 + 5) / 3 = 15 / 3 = 5

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
// console.log(processed)  == 2 | (7 + 3) / 5 




    // STAND IN LINE
// cue = is an abstract data structure where items are kept in order
// New items can be added to the back of the cue and old items are taken off from the front of the cue.


function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr =  [1,2,3,4,5];

// JSON.stringify = it's changing an array into a string
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));




    // BOOLEAN VALUES
// Booleans are another datatype in JS
// There only 2 values - true or false
// They're like on/off switches where true is on and false is off
// They don't use quotation marks around the Boolean

function welcomeToBooLeans() {
    return false;
}
function welcomeToBooLeans() {
    return true;
}




    // USE CONDITIONAL LOGIC WITH IF STATEMENTS

//if the stuff inside parenthesis evaluates to true, then the code within these curly braces will be evaluated or run
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true"; // if it's true we get this result
    }
    return "No, it's false" // if it's false we get this result
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
}
// console.log(trueOrFalse(true));
// console.log(trueOrFalse(false));





    // COMPARISION WITH THE EQUALITY OPERATOR
// Equality operator is the most common. That is often used in an "if" statement

function testEqual(val) {     
    if (val == 12) {  // == is the equality operator // single = sign is the assignment operator (val = 12) means val is 12
        return "Equal";
    }
    return "Not Equal";
}
// console.log(testEqual(12)); // "Equal"
// console.log(testEqual(10)); // "Not Equal"





    // COMPARISION WITH THE STRICT EQUALITY OPERATOR
// "===" is a strict equality operator
// The difference is that the equality operator, attempts to convert both values being compared to a common type.
// The strict eq. operator doesn't do the type conversion
function testStrict(val) {
    if (val === 3) {
        return "Equal"
    }
    return "Not Equal";
}
// console.log(testStrict("3")); // Not equal
// console.log(testStrict(3)); // Equal



    // PRACTICE COMPARING DIFFERENT VALUES
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
// console.log(compareEquality(10, 10 )); // Equal
// console.log(compareEquality(10, "10" )); // Not Equal




    // COMPARISION WITH THE INEQUALITY OPERATOR
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
// console.log(testNotEqual(99));




    // COMPARISION WITH THE STRICT INEQUALITY OPERATOR
// The strict inequality operator is the opposite of the strict equality operator.
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
// console.log(testStrictNotEqual(10));




    // COMPARISIONS WITH THE LOGICAL AND OPERATOR
function testGreaterThan(val) {
    if(val > 100) {
        return "Over 100"
    }

    if (val > 10) {
        return "Over 10"
    }

    return "10 or Under"
}
// console.log(testGreaterThan(100));




    // COMPARISON WITH THE GREATHER THAN OR EQUAL TO OPERATOR
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10"
}
// console.log(testGreaterOrEqual(20))




    // COMPARISON WITH THE LESS THAN OPERATOR
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
    return "Under 55"
    }
    return "55 or Over"
}
// console.log(testLessThan(19))




    // COMPARISON WITH THE LESS THAN OR EQUAL OPERATOR
function testLessThanOrEqual(val) {
    if (val <= 12) {
        return "12 or Less"
    }
    if (val <= 24) {
        return "24 or Less"
    }
    return "Over 24"
}
// console.log(testLessThanOrEqual(25))

// AND / OR - 1:19:16