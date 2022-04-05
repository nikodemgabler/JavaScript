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




    // COMPARISIONS WITH THE LOGICAL AND OPERATOR
// It's useable when we want to check at least 2 things are true at the same time.
function testLogicalAnd(val) {
    if (val <= 50) {
        if (val >= 25) {
            return "It's equal 25 or over or it's equal 50 or less";
        }
    }
    return "No";
}
// console.log(testLogicalAnd(25));
function testLogicalAnd2(val) {
    if (val <=50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
// console.log(testLogicalAnd2(25));




    // COMPARISIONS WITH THE LOGICAL or OPERATOR
function testLogicalOr(val) {
    if (val < 10) {
        return "Outside";
    }
    if (val > 20) {
        return "Outside";
    }
    return "Inside";
}
// console.log(testLogicalOr(15));

function testLogicalOr2(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside"
}
// console.log(testLogicalOr(15));





    // ELSE STATEMENTS
// When an if statement is true, normally the block of code right after the if statement will be evaluated
// If it's not true, nothing happens
// With an "else" statement, an alternate block of code be executed when it's not true
function testElse(val) {
    var result = "";

    if(val > 5) {
        result = "Bigger than 5";
    }
    if(val <= 5) {
        result = "5 or Smaller"
    }
    return result;
}
// console.log(testElse(5));
function testElse2(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
// console.log(testElse(5))





    // ELSE IF STATEMENTS
// If we have multiple conditions that need to be addressed, we can use "else if" statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    if (val < 5) {
        return "Smaller than 5";
    }
    return "Between 5 and 10"
}
// console.log(testElseIf(11));
function testElseIf2(val) {
    if (val > 10) {
        return "Greater than 10"
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10"
    }
}
// console.log(testElseIf(11));





    // LOGICAL ORDER IN IF ELSE STATEMENTS
// In "else if" statements order is very important
function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5"
    } else {
        return "Greater than or equal to 10"
    }
} // this is a bad order and if val = 4 we still get communicate "Less than 10"

function orderMyLogic2(val) {
    if (val < 5) {
        return "Less than 5"
    } else if (val < 10) {
        return "Less than 10"
    } else {
        return "Equal or over 10"
    }
} // once the first condition is met, it doesn't even check for the rest of and condistions
// console.log(orderMyLogic2(11))




    // CHAINING If Else STATEMENTS
function testSize(num) {
    if (num < 5) {
      return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
    return "Huge";
    }
}
// console.log(testSize(20));




    // GOLF CODE
var names = ["Hole-in-one!", "Eagle", "Bridie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {

    if (strokes == 1){
         return names[0];
    } else if (strokes <= par - 2){
        return names[1];
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes == par + 3) {
        return names[6]
    }
}
// console.log(golfScore(0, 2));





    // SWITCH STATEMENTS
// Instead of using chained else if statements you can use a switch statement
// Switch statement tests a value and can have many case statements which define various possible values
function caseInSwitch(val) {
    var answer = "";
    switch(val) { // we're gonna compare the val to the different cases that we have. 
        case 1: // It's saying if the case of val is 1 and it's using === operator then we invoke case 1
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta"
            break;
    }
        return answer;
}
// console.log(caseInSwitch(4));
// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"





    // DEFAULT OPTION IN SWITCH STATEMENTS
//
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default: // it's like "else"
            answer = "stuff";
            break
    }
    return answer;
}
// console.log(switchOfStuff(2)); // then we get empty string, because var answer = " " if we don't set the "default";





    // MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break;
        case 4:
        case 5:
        case 6:
            answer = "Medium"
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
// console.log(sequentialSizes(5));




    // REPLACING IF ELSE CHAINS WITH SWITCH
function exmapleIfElseChain (val) {
    var answer = "";

    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer"
    } else if (val === 1) {
        answer = "There is no #1"
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    } else {
        answer = "Something else";
    }
    return answer;
}
// console.log(exmapleIfElseChain("bob"))

function chainToSwitch(val) {
    var answer = "";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The answer"
            break;
        case 1:
            answer = "There is no #1"
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine"
            break;
    }
    return answer;
}
// console.log(chainToSwitch(7));






    // RETURNING BOOLEAN VALUES FROM FUNCTIONS 1:41
function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
// We can make it simpler
function isLess(a, b) {
    return a < b;
}
// console.log(isLess(10, 15)) // result = true
// console.log(isLess(20, 15)) // result = false




    // RETURNING EARLY PATTERN FROM FUNCTIONS
    function abTest(a, b) {

        if (a < 0 || b < 0) {
            return undefined;
        } 
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    // console.log(abTest(0,2))




    // COUNTING CARDS
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break; 
        case "10":
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break;
    } 
    var holdOrBet = "Hold"
    if (count > 0) {
        holdOrBet = "Bet"
    }

    return count + " " + holdOrBet;
}
cc(2); cc("K"); cc("Q"); cc(2)
// console.log(cc(4));




    // BUILD JAVASCRIPT OBJECTS
// Objects are similar to arrays, but instead of using indexes to acces data, we use properties.
var ourDog = { // it is an object called ourDog
    "name": "Camper", // property
    "legs": 4, // property
    "tails": 1, // property
    "friends": ["everything!"] // property
};

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
}





    // ACCESSING OBJECT PROPERTIES WITH DOT NOTATION
// There are two main ways to access a property on an object
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
// First is dot notation 
var hatValue = testObj.hat // = "ballcap"
var shirtValue = testObj.shirt; // = "jersey"


// Second method - ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION
// We can use it any time IF THE NAME HAS A SPACE in it
    var testObj = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water",
    }
    var entreeValue = testObj["an entree"]; // hamburger
    var drinkValue = testObj['the drink']; // water






    //  ACCESSING OBJECT PROPERTIES WITH VARIABLES
 // Bracket notation can also be used to look up object properties using variables
 var testObj = {
     12: "Namath",
     16: "Montana",
     19: "Unitas:"
 };

 var playerNumber = 16;
 var player = testObj[playerNumber];
//  console.log(player) // Montana 




    // UPDATING OBJECT PROPERTIES
// We can use dot notation to update object properties
    var ourDog = { 
        "name": "Camper", 
        "legs": 4, 
        "tails": 1,
        "friends": ["everything!"]
    };
    ourDog.name = "Happy Camper";
    // console.log(ourDog.name) = "Happy Camper"
    var myDog = { 
        "name": "Lessie", 
    };
    myDog.name = "Happy Lessie";
    // console.log(ourDog);





    // ADD NEW PROPERTIES TO AN OBJECT
    var newDog = { 
        "name": "Lucjan", 
        "legs": 4, 
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
    };
    newDog.bark = "bow-wow";
    // console.log(newDog) = Now it has 5 properties

    // DELETE PROPERTIES FROM AN OBJECT
    delete newDog.bark;
    // console.log(newDog) // Now it has again 4 properties





    
    // USING OBJECTS FOR LOOKUPS
function phoneticLookup(val) {
    var result = "";
    
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chciago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };

    result = lookup[val]
    return result;
    // switch(_val) {
    //     case "alpha":
    //         _result = "Adams";
    //         break;
    //     case "bravo":
    //         _result = "Boston";
    //         break;
    //     case "charlie":
    //         _result = "Chicago";
    //         break;
    //     case "delta":
    //         _result = "Denver";
    //         break;
    //     case "echo":
    //         _result = "Easy";
    //         break;
    //     case "foxtrot": 
    //         _result = "Frank";
    //         break;
    // }
}
//  console.log(phoneticLookup("foxtrot"))







    // TESTING OBJECTS FOR PROPERTIES
// We can check if an object has a property with the .hasOwnProperty method

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
};

function checkObj(checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not found"
    }
}

// console.log(checkObj("pet"));







    // MANIPULATING COMPLEX OBJECTS
// JavaScript object is a way to store flexible data
// We can store: strings, numbers, arrays and other objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },

    {
        "artist": "Beau Carens",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ]
    }
]
// console.log(myMusic)







    // ACCESSING NESTED OBJECTS
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}

var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents)






    // ACCESSING NESTED ARRAYS
// Array bracket notation can be changed to acces nested arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1].list[1];
// console.log(secondTree)






    // RECORD COLLECTION
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

    if (value === "") {
        delete collection[id][prop]
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

// console.log(updateRecords("5439", "artist", "ABBA"));


var collection2 = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

function updateCollection2 (id, prop, value) {

    if (value === "") {
        delete collection2[id][prop]
    } else if (collection2[id][prop] = collection2[id][prop] || "") {
        collection2[id][prop].push(value)
    }
    return collection2

}
// console.log(updateRecords(2468, "tracks", "test"));






    // ITERATE WITH WHILE LOOPS
// Loops aloow to run the same code multiple times
// "while" loop runs while a specified condition is true
var myArray = [];

var i = 0
while (i < 5) {
    myArray.push(i)
    i++
}

// console.log(myArray);






    // ITERATE WITH FOR LOOPS
// "for" loop is the most common type of loop in JavaScript
var ourArray = [];

    // initialization ; condition ; expression 
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

var myArray = [];

for(var i = 1; i < 6; i++) {
    myArray.push(i);
}

// console.log(myArray);





    // ITERATE ODD NUMBERS WITH A FOR LOOP // ODD - nieparzyste
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
// console.log(ourArray);


var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}
// console.log(myArray)






    // COUNT BACKWARDS WITH A FOR LOPP
var myArray = [];

for (i = 10; i > 0; i -= 2) {
    myArray.push(i);
}
// console.log(myArray); 





    // ITERATE THROUGH AN ARRAY WITH A FOR LOOP
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i]
}

// console.log (ourTotal);
// console.log(ourArr)

var myArr = [2, 3, 4, 5, 6]
var myArrSum =  0;

for (i = 0; i < myArr.length; i++) {
    myArrSum += myArr[i]
}
// console.log(myArrSum)







    // NESTING FOR LOOPS
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]; 
        }
    }
    return product;
}
product = multiplyAll([[1,2], [3,4], [5,6,7]])
// console.log(product);






function essa(arr) {
    var sum = 1;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            sum *= arr[i][j];
        }
    }
    return sum;
}


sum = essa([[1,2], [3,4], [5,6,7]])
// console.log(sum)





    
    // ITERATE WITH Do.. While LOOPS
// In a do ... while loop, this is ALWAYS RUN AT LEAST ONCE before it check the condition

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++
} while (i < 5) 

// console.log(i, myArray);





    // PROFILE LOOKUP
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "05142552656",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "05142564245",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "05142532532",
        "likes": ["Intiguing Cases", "Violin"]
    },
    {
        "firstName": "Krystian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
]

// We want to do is create this lookUpProfile function where we pass in a name and property and it's going to return the value of that property
// When we pass in ("Krystian", "number") function has to show us his number
// If we pass in name that doesn't exist, then function show us "No such contact" or "No such property" in no property case

function showProp(name, prop) {

    var data = ""
    
    for (i = 0; i < contacts.length; i++) {
        if(name === contacts[i].firstName) {
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact"
}

var data = showProp("Sherlock", "lastName")
// console.log(data);

// 1. The first thing for each of these contacts we're going to check is if the name is a name in this list






    // GENERATE RANDOM FRACTIONS
// simple way to create a random decimal number (l. dziesiętna) in JavaScript
function randomFraction() {
    return Math.random()
}
// console.log(randomFraction()) 




    // GENERATE RANDOM WHOLE NUMBERS
// Math.floor - it rounds down to the nearest whole number
// Math.random can never be 1 ( it can be 0 but it can ever be quite 1)
// whem we multiply it by 20 we're going to get a number betwee 0 and 20, but not including 20
// by Math.floor we are rounding it down which will end up being 0 to 19;
 var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

 function randomWholeNum () {

    return Math.floor(Math.random()*10);
 }

//  console.log(randomWholeNum());
//  console.log(randomWholeNum());




    // GENERATE RANDOM WHOLE NUMBERS WITHIN A RAGE
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}


function randomRage(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}
// console.log(ourRandomRange(6, 9))





    // USE THE parseInt FUNCTION
// It takes a string and returns an integer. - Integer (liczba całkowita)
function convertToInteger(str) {
    return parseInt(str);
}
var number = "56";
// console.log(convertToInteger(number))







    // USE THE parseInt FUNCTION WITH A RADIX
// Radix specifies the base of the number in the string ( such as base 2 or 7 or 8)
// Base 2 is binary so that's one of the most common ones to use
function convertToInteger(str) {
    return parseInt(str, 2)
}
// console.log(convertToInteger("10011"))





    // USE THE CONDITIONAL (Ternary) OPERATOR  - Operator trójskładnikowy
// condition ? statement-if-true : statement-if-false
function checkEqual (a,b) {
    return a === b ? true : false;
}





    // USE MULTIPLE CONDITIONAL (Ternary) OPERATORS
// We can nest them within each other which gives them even more power

function checkSign(num) {
    // return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
    // conditioin | true = "pos.." | <0 = "negative" // false = "zero"
    return num > 0 ? "positive" : num === 0 ? "zero" : "negative"
   
}
// console.log(checkSign(-90));





    // DIFFERENCES BETWEEN THE var and let KEYWORDS
let catName = "Quincy";
var quote;

catName = "Beau";

function catTalk(kittyName) {
    "use strict";
    // it helps to catch coding mistakes (if u create a variable and don't declare it with var, let or const)

    catName = kittyName;
    quote = catName + " says Meow!";
    return quote;
}

// catTalk();
// console.log(catTalk("Emma"))





    // COMPARE SCOPES OF THE var AND let KEYWORDS
// when we declare var , it is decleraed globally or locally
// let - is limited to the block statement or expression that it was declared in
// event if var is in the if(), it works outside the condition
function checkScope() {
    "use strict";
    let i = "function scope";
    if(true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
// checkScope();





    // DECLARE A READ-OLNY VARIABLE WITH THE const KEYWORD
// const has all the features of let but it's also read-only - we cannot reassing the const
function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";
// if you declare a variable with the const keyowrd you cannot reassing it afterwards.
    SENTENCE = str + " is amazing!"

    for(let i = 0; i < str.length; i += 2 ) {
        console.log(SENTENCE);
    }
}
// printManyTimes("freeCodeCamp");




    // MUTATE AN ARRAY DECLARED WITH const
const s = [5, 7, 2]
function editInPlace () {
    "use strict";

    // s = [2, 5, 7]
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    return console.log(s)
}
// editInPlace();






    // PREVENT OBJECT MUTATION
// object.freeze will prevent data mutation

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    // Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch ( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

// console.log(PI);




    // USE ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCTIONS

// It's an anonymous function coz it doesn't have a name. It is assinged to var magic
var magic = function() {
    return new Date();
}
// An anonymous function can be converted into an arrow function 
var magic = () => {
    return new Date();
}
// We can make it shorter even more IF WE RETURNING JUST ONE VALUE
var magic = () => new Date();




    // WRITE ARROW FUNCTIONS WITH PARAMETERS
// We can pass arguments to arrow functions
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

var myConcat2 = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat2([1,2], [3,4,5]));





    // WRITE HIGHER ORDER ARROW FUNCTIONS
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);




    // WRITE HIGHER ORDER ARROW FUNCTIONS
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    }
})();
// console.log(increment(5,2)); 
// console.log(increment(5));




    // USE THE rest OPERATOR WITH FUNCTION PARAMETERS
// rest operator allows to create a function that takes a variable number of arguments
// rest operator = ...
// let sum = (function() {
//     return function sum(...args) {
//         let args = [ x, y, z ];
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();
// console.log(sum(1, 2, 3))



    // USE THE Spread OPERATOR TO EVALUATE ARRAYS IN-PLACE
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2)

// if we want arr2 to be copy of arr1, we have to spread operator inside brackets [...arr1]
