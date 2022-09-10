// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php

//* My solution:

const date = new Date();
const options = { weekday: 'long'};
const dayLong = new Intl.DateTimeFormat('en-US', options).format(date)
const time  = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


function displayDay() {
  console.log(`Today is: ${dayLong}`);
}

function displayTime() {
  console.log(`Current time is: ${time}`);
}

displayDay();
displayTime();

// - - -

//* Site soltion:

const today = new Date();
  const day = today.getDay();
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log(`Today is : ${daylist[day]}.`);
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);