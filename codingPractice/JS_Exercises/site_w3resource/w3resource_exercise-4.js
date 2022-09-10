// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-4.php

//* My solution:

let a = 5;
let b = 6;
let c = 7;
let tArea;

function triangleArea(a, b, c) {
    return tArea = a * b * c;
}

triangleArea();

// - - -

//* Site soltion:

const side1 = 5; 
const side2 = 6; 
const side3 = 7; 
const perimeter = (side1 + side2 + side3)/2;
const area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);
