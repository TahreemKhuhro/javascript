// if else
let age = 16;
if(age>18){
    console.log("You can caste vote");
}
else{
    console.log("you can't caste vote");
}
// else if
let newbie=true;
let user=true;
let goldenuser=false;
if(newbie){
    console.log("0% discount");
}
else if(user){
    console.log("40% discount");
}
else if(goldenuser){
    console.log("80% discount");
}


// switch statement
let activity="Lunch";
switch(activity){
    case "Get up":
    console.log("It is 6 O'clock");
    break
    case "Breakfast":
    console.log("It is 7 O'clock");
    break
    case "Drive to work":
        console.log("Its 9 o'clock");
    break
    case "Lunch":
        console.log("Its 1:30 o'clock");
    break
    case "Drive home":
        console.log("Its 8:00 o'clock");
    break
    case "Dinner":
        console.log("Its 9:30 o'clock");
    default:
        console.log("I am not well");

}


// random function in javascript
// Math.random(); 0 to 1
let randomNumber=Math.random();
let increaserange=randomNumber*10;
let WholeNumber=Math.floor(increaserange)
console.log(WholeNumber)

// What is this