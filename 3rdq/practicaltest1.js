// JAVASCRIPT OPERATORS 

// A. Arithmetic 

/*  - addition
    - subtraction 
    - multiplication
    - division 
    - modulus
    - increment 
    - decrement 
*/ 

// first let's declare different variables 

// note: task is to use ALL types of inputting and outputting

var x = 50; 
var y = 27; 
document.getElementById("id1").innerHTML = `First number: ${x}`;
document.getElementById("id2").innerHTML = `Second number: ${y}`;


// a. Addition - adds two operands

var sum = x + y; 
document.getElementById("sum").innerHTML = `The sum of the two numbers is: ${sum}`;

/* NOTE: you may also add different strings */ 

var firstName = "Andrea"; 
var secondName = "Reena";
document.getElementById("sumstring").innerHTML = `Hello! My name is ${firstName} ${secondName}, how about you?`

// added two strings

// you cannot add two variables of DIFFERENT datatypes because that will not work 

var string = "99";
var sumOftwo = x + string;
document.getElementById("errorsum").innerHTML = `The sum is: ${sumOftwo}`;

/* instead of having an answer of 149, the answer is 
5099 because it only put the two together since adding a string
and an integer/ number is not allowed in javascript or here */

// B. Subtraction - subtracting the two numbers
// note: in subtraction, only the VALUE is considered, so adding different datatypes suich as a string and an integer/ number would be allowed and would happen with little to no problems at all

var difference = x - y; 
console.log("The difference of x - y is: " + difference);

// 50-27 is 23 

var differenceOftwo = x - string; 
console.log("The difference of x - string is because or since this works is: " + differenceOftwo);

// as we can see, it truly works 

// C. Multiplication - multiplying two numbers

var product = x * y; 
document.write("The product is:" + product + "\n"); 
var productOftwo = x * string; 
document.write("The product of the string and the integer is: " + productOftwo);


// D. Division - dividing two numbers

var quotient= x / y; 
alert("The quotient is: " + quotient); 
var quotientOftwo = x / string; 
alert("The quotient of the string and integer is: " + quotientOftwo); 

//  E. Modulus - remainder

var modulus = x%y; 
console.log(`The remainder is${modulus}`);

//  F. Increment - adds one to the operand 

var increment = x++; 
console.log(" X + 1 is " + increment);

//  E. Decrement - subtracts one to the operand

var decrement = y--; 
console.log(" Y - 1 is " + decrement);

// ---


// B. Comparison - needed to compare two values

// a. == - (equal)
// b. != - (not equal)
// c. > - (greater than)
// d. < - (less than)
// e. >= - (greater than or equal to)
// f. <= - (less than or equal to)
// g. === - (strictly equal)
// h. !== - (strictly not equal)

/* What is the difference between EQUAL/ NOT EQUAL 
to STRICTLY EQUAL/ NOT EQUAL 

- equal/ not equal only checks the values and not the 
datatypes 
- STRICTLY equal/ not equal checks all including the different 
datatypes*/ 

a = 20; 
b = 30; 

console.log(a=="20"); // results to true
console.log(a==="20"); // results to false

// ---

// Logical Operators 
// a. LOGICAL AND (&&) -> both operators are true 
// b. LOGICAL OR (||) -> only one of the following operators is true
// c. LOGICAL NOT (!) -> if it's true, it will return false and vice versa when it is false, it shall return true

c = "50";
d = "30";

console.log(c=="20" && c>d); // it returns false

// --- 

// Assignment operators - shortcuts
// a. x = y
// b. x+=y (x = x+y)
// c. x-=y (x = x-y)
// d. x/=y (x = x/y)
// e. x%=y (x = x%y)

x = 10;
y = 1;
console.log(x+=y); // returns 11

// These are the operators of javascript and other scripting and programming languages respectively



