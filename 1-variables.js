// ------------ VARIABLES -----------

// 1. Declare a variable named `welcome` and assign it the value 'Hello world'.

let welcome = 'Hello world'

// 2. The `name` variable and it's value are declared below. Reassign the variable so it then has the value of your name.

let name = 'Old Name' // hint: don't change this line! Reassign on the next line.
name = 'Ryan'

// 3. After the following code has run, what value does `nameOne` have?
let nameOne = 'Marama'
let nameTwo = 'Wiremu'
let nameThree = nameTwo
nameTwo = nameOne
nameOne = nameThree
const value = nameThree
// Uncomment the following line and assign your answer to the variable `value`.

// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!

let toExport = { name }
if (typeof value !== 'undefined') toExport.value = value
if (typeof welcome !== 'undefined') toExport.welcome = welcome
module.exports = toExport
