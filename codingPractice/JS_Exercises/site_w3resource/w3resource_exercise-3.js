// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php

//* My solution:

const date = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const todayString = Intl.DateTimeFormat('en-US', options).format(date);

function todayDate() {
    console.log(todayString);
}

todayDate();

// - - -

//* Site soltion:

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
const yyyy = today.getFullYear();
if(dd<10) 
{
    dd=`0${dd}`;
} 

if(mm<10) 
{
    mm=`0${mm}`;
} 
today = `${mm}-${dd}-${yyyy}`;
console.log(today);
today = `${mm}/${dd}/${yyyy}`;
console.log(today);
today = `${dd}-${mm}-${yyyy}`;
console.log(today);
today = `${dd}/${mm}/${yyyy}`;
console.log(today);