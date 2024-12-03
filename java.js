// if else
let age = 16;
if (age > 18) {
    console.log("You can caste vote");
}
else {
    console.log("you can't caste vote");
}
// else if
let newbie = true;
let user = true;
let goldenuser = false;
if (newbie) {
    console.log("0% discount");
}
else if (user) {
    console.log("40% discount");
}
else if (goldenuser) {
    console.log("80% discount");
}


// switch statement
let activity = "Lunch";
switch (activity) {
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
// let randomNumber=Math.random();
// let increaserange=randomNumber*10;
// let WholeNumber=Math.floor(increaserange)
// console.log(WholeNumber)

// What is this

// let x = 0;
// while (x < 10) {
//     console.log(x);
//     x = x + 1;
// }
// i++==i+1




// let t=2;
// while(t<22)
//     {
//     console.log(t);
//     t=t+2;
// }

// let students = ["ayesha", "bilal", "saima"]
// let x = 0;
// while (x < students.length) {
//     console.log(students[x]);
//     x = x + 1;
// }


// for (let x = 0; x < students.length;x++) {
//     console.log(students[x]);
// }


for (let x = 1; x < 11;x++) {
let result =2*x;
console.log(x);
}
for (let x = 1; x < 11;x+2) {
    let result =2*x;
    console.log(x);
    }


let someArray=["A","B","C","D","E"];
let notFound=true;
while(notFound && someArray.length>0){
    if(someArray[0]==="D")
    {
    console.log("Found!");
    notFound=false;
}
else{someArray.shift();}
}
