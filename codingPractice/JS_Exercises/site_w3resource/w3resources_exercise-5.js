// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-5.php

//* My solution:

const rotate = 'w3resource';
let rotateArray = rotate.split("");

function rotateRight(rotateArray) {
    for (let i = 0; i < rotateArray.length; i++) {
        let last = rotateArray.pop();
        rotateArray.unshift(last);
        console.log(rotateArray.join(''));
    }
}

 rotateRight(rotateArray);

//* Site soltion:

function animate_string(id) 
{
    const element = document.getElementById(id);
    const textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;

setInterval(() => {
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

