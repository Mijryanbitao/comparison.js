//Create a variable named firstFavNumb and store your favorite number
let firstFavNumb = 16;
//Create a variable named secondFavNumb and store your second favorite number
let secondFavNumb = 61;

//COMPARISON //

//Greater Than
console.log(firstFavNumb > secondFavNumb); //false
//Less Than
console.log(firstFavNumb < secondFavNumb); //true

// RELATIONAL //

//Greater Than or Equal to
console.log(firstFavNumb >= secondFavNumb); //false
//Less Than or Equal to
console.log(firstFavNumb <= secondFavNumb); //true
//Strict Equality (===)
console.log(firstFavNumb === secondFavNumb); //false
//Loose Equality (==)
console.log(firstFavNumb == secondFavNumb); //false
//Strict Inequality (!==)
console.log(firstFavNumb !== secondFavNumb); //true
//Loose Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true

 // LOGICAL OPERATORS //

 //AND
let x = 21;
let y = 41;
let z = 61;

 console.log(x < y && y < z); //true
 console.log(x > y && y > z); //false

//OR
let a = "joy";
let b = "lonely";
let c = "joy";

console.log(a === b || a === c); //true
console.log(a === b || b === c); //false

//NOT
let isLight = true;
let isDark = false;

console.log(!isLight); //false
console.log(!isDark); //true

console.log(!isLight && isDark); //false
console.log(isLight && !isDark); //true
console.log(isLight || isDark); //true
console.log(!isLight || isDark); //false
console.log(isLight == isDark); //false
console.log(isLight == !isDark); //true
