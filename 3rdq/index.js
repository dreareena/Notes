/* JAVASCRIPT is a programming language that is a client-side 
web development. It is loosely-typed. Loosely-typed means that
it does not need to be added as a datatpe since JAVASCRIPT can 
already recognize it. Other than this, it is a dynamic programming
language which simply means that what is seen on the otuside is
not necessarily what is typed on the code propper. */

// Client-side web developmebt -> it is absed on the client's browser and tis abilities (not the server)

/* ADVANTAGES: 
    - less contact with the server; it allows USER FEEDBACK first tp
    avoid stacking up on the server 
    - immediate feedback/ response to visitors; e.g. the pop-ups that
    appear when the page loads
    - expanded interactivity; you can have buttons and such to interact
    with the webpage as a visitor
    - you may use this to have richer GUI (use drag-and-drop components and
        such) note: GUI is graphical user interface which is a digital interface
        that users may interact with such as icons, etc.
*/

/* LIMITATIONS 
    - no capability of pursuing or composing files
    - does not have any organized material to support applications 
    - runs in SINGLE EXECUTION thread only
*/

/* HOW DO YOU ADD A JAVASCRIPT CODE
 - Javscript is added through different keywords. 

 A. VAR -> has VAR HOISTING
    - you may redefine and reassign 
 B. LET
    - you may only reassign but not redefine
 C. CONST
    - you may not reassign and redefine since it is a CONSTANT
*/

// Var sample 

var firstName = "Juan";
console.log(firstName);

// Let sample 

let secondName="Juanito"; 
secondName = "Juanita";  // this is alright sicne this is reassignation
// let secondName = "JuanitoandJuanita"; this will produce an error since it cannot be declared twice (redeclaration) in let
console.log(secondName);

// Const sample 

const THIRDNAME = "Juananito"; // in const, we capitalize the WHOLE variable name to identify it as a const
/*THIRDNAME = "Juananita"; 
const THIRDNAME = "Juananita-Juananito"; 
These two will produce respective errors for it 
is constant in const and the number shall not change */


/* DIFFERENT CASES IN JAVASCRIPT 
        a. snake_case
            - all in lowecase, space is separated of an underscore
        b. PascalCase
            - all first letters of first words, uppercase and the rest
            are in lowercase; no space representation 
        c. camelCase
            - first letter of the first word should eb in lowercase, while
            every single first letter of words after this should be in uppercase,
            and the rest in lowercase; no space and may start with an underscore as well
*/

var snake_case = "this is snake case"; // this is how snake_case looks like
var Pascalcase = "this is pascal case"; // this is how Pascalcase looks loke

// in JavaScript, camelCase is recommended 

// Variables are STORAGE of values, they may be redeclared or reassigned depending on what type of keyword you use 
/* NAMING VARIABLES 
a. Dollar sign, underscore, numbers, and letters are allowd but it CANNOT start with a number
b. Certain reserved words are not allowd (const, string, double, long, etc.)
c. Case-sensitive, so follow the uppercase and lowercase all the time in any variable names
*/

// PRIMITIVE DATATYPES (primitive means it only accepts ONE VALUE instead of many)

// a. String - this is a collection of characters 
/* - You may wrap up the string with a single quote and double quote but they should be interchanged
   - You may also use the escape character 
   EXAMPLE: */ 

var string1 = "I'm here"; // since there is a single quotation mark (') inside the string, double quotation must be used
var string2 = '"Hello there!" she said to me as she walked by' // since this uses double quotation marks (""), a single quotation mark must be used on the string 
var string3 = 'Okay, \I\'ll see you there ' // forward shashes are used BEFORE THE WORD and BEFORE THE quotation mark respectively
console.log(string3);

// a. USING (+) symbol and concat function



/* trial and error on string */ 
var difference = 10 - "5"; 
console.log("the difference is", difference); // it works in SUBTRACTION 

var quotient = 10 / "5"; 
console.log("the quotient is", quotient); // it works in SUBTRACTION

var product = 10 * "5"; 
console.log("the product is", product); // it works in MULTIPLICATION

var sum = 10 + "5"; 
console.log("the sum is", sum); // it DOES NOT WORK IN ADDITION 

// GLOBAL-SCOPE (var) - it can be accessed anywhere
// BLOCK-SCOPE (in let and const) -  let is only accessiblie within the area where declaration happens
/* CURLY-BRACES = BLOCK and it cannot 
be used in any other part that is not part 
of the curly braces */
// inside new scope, it is considered as a TOTALLY NEW VARIABLE
