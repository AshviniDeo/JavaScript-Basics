/*console.log("Hello Ashvini");
var data = 10;
if(true){
    let data = "Ash";
    console.log(data);
}
console.log(data);

function sayHello(name){
    console.log("Hello" + name);
}

sayHello(" Mayur");*/
let userInput = require('readline-sync');
let ranValue = Math.floor(Math.random()*10);
console.log(ranValue);

let dice = Math.floor((Math.random()*10+1)%7);
console.log(dice);

let dice1 = Math.floor((Math.random()*10+1)%7);
let dice2 = Math.floor((Math.random()*10+1)%7);
let dice3 = dice1+dice2;
console.log(dice3);

let result = 0;
for(var i = 0; i<5; i++){
    let ran = Math.floor((Math.random()*10+10)%99);
    console.log("a:"+ ran);
    result = result + ran;
}
console.log(result);

console.log("Unit ConverSion :");
let oneFeet = 12;
let feet = 42/oneFeet;
console.log("42 inch ="+feet +"Ft.");

console.log("Rectangle plot feet to meter");
let height = 60 * 0.304;
let length = 40 * 0.304;
let plot = height * length;
console.log("Rectangular Plot =",plot," meter");


console.log("Max and Min ");
let max = 0;
let min = 999;
for(var i = 0; i<5; i++){
    let num = Math.floor((Math.random()*999)+100);
    console.log("value of a :"+num);
    if(max<num){
        max = num;
    }
    if(min>num){
        min = num;
    }
}
console.log("Maximum value :"+max+"\tMinumum value :"+min);

console.log("Leap Year");

let year = userInput.questionInt("Enter year to check Year is Leap or not : ");
if(year%4 == 0 && year%100 != 0){
    console.log(year + " Is a Leap Year");
}else{
    console.log(year + " Is not a Leap year.");
}

let coin = Math.floor((Math.random()*10)%2);
if(coin == 0){
    console.log("Coin Flip Head");
}else{
    console.log("Coin Flip Tail");
}

let number = userInput.questionInt("Enter Single Digit number[0-9] : ");
if(number == 0){
    console.log("Zero");
}else if(number == 1){
    console.log("One");
}else if(number == 2){
    console.log("Two");
}else if(number == 3){
    console.log("Three");
}else if(number == 4){
    console.log("Four");
}else if(number == 5){
    console.log("Five");
}else if(number == 6){
    console.log("Six");
}else if(number == 7){
    console.log("Seven");
}else if(number == 8){
    console.log("Eight");
}else if(number == 9){
    console.log("Nine");
}

let weekDay = userInput.questionInt("Enter weekDay \n 1.Sunday\n2.Monday\n3.Tuesday\n4.Wednesday\n5.Thusday\n6.Friday\n7.Saturday\n::");
if(weekDay == 1){
    console.log("SUNDAY");
}else if(weekDay == 2){
    console.log("MONDAY");
}else if(weekDay == 3){
    console.log("TUESDAY");
}else if(weekDay == 4){
    console.log("WEDNESDAY");
}else if(weekDay == 5){
    console.log("THUSDAY");
}else if(weekDay == 6){
    console.log("FRIDAY");
}else if(weekDay == 7){
    console.log("SATURDAY");
}

let a = userInput.questionInt("Enter first number :");
let b = userInput.questionInt("Enter Second number :");
let c = userInput.questionInt("Enter Third number :");
let res1 = a + b * c;
let res2 = a % b + c;
let res3 = c + a / b;
let res4 = a * b + c;
if(res1 > res2){
    if(res1 > res3){
        if(res1 > res4){
            console.log("Maximum number :",res1);
        }else{
            console.log("Maximum number :",res4);
        }
    }else{
        if(res3 > res4){
            console.log("Maximum number :",res3)
        }
    }
}else{
    if(res2 > res3){
        if(res2 > res4){
            console.log("Maximum number :",res2);
        }
    }
}

if(res1 < res2 && res1 < res3 && res1 < res4){
    console.log("Mininimum result :", res1);
}else if(res2 < res1 && res2 < res3 && res2 < res4){
    console.log("Mininimum result :", res2);
}else if (res3 < res1 && res3 < res2 && res3 < res4){
    console.log("Mininimum result :", res3);
}else if(res4 < res1 && res4 < res2 && res4 < res3){
    console.log("Mininimum result :", res4);
}

console.log("Switch Case Problems :");
let choice = userInput.questionInt("Enter Single Digit \nPress 0:0\tPress 1:1\tPress 2:2\tPress 3:3\tPress 4:4\tPress 5:5\tPress 6:6\tPress 7:7\tPress 8:8\tPress 9:9 :->");
switch(choice){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
         console.log("Two");
         break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Enter Valid Choice :");
}

let day = userInput.questionInt("Enter Day \nPress 1:Sunday\nPress 2:Monday\nPress 3:Tuesday\nPress 4:Wednesday\nPress 5:Thusday\nPress 6:Friday\nPress 7:Saturday :");
switch(day){
    case 1:
        console.log("SUNDAY");
        break;
    case 2:
        console.log("MONDAY");
        break;
    case 3:
         console.log("TUESDAY");
         break;
    case 4:
        console.log("WEDNESDAY");
        break;
    case 5:
        console.log("THUSDAY");
        break;
    case 6:
        console.log("FRIDAY");
        break;
    case 7:
        console.log("SATURDAY");
        break;
    default:
        console.log("Enter Valid Choice :");
}

console.log(":: Unit Conversion ::");
let value = userInput.questionInt("Enter Value to convert :");
let unitConvert = userInput.questionInt("Enter \n press 1:Feet To Inch \n press 2:Inch To Feet \n press 3: Feet To Meter \npress 4:Meter To Feet ::");
switch(unitConvert){
    case 1:
        result1 = value * 12;
        console.log(result1,"Inch");
        break;
    case 2:
        result2 = value /12;
        console.log(result2,"Feet");
        break;
    case 3:
        result3 = value * 0.304;
        console.log(result3," Meter");
        break;
    case 4:
        result4 = value * 0.304;
        console.log(result4," Feet");
        break;
    default:
        console.log("Enter valid choice");
}

let harmonic = userInput.questionInt("Enter Harmonic Series :");
let k = 1;
for(let i = 1; i<=harmonic; i++){
    if(i != 1){
        console.log("+");
    }
    console.log(k,"/",i);
}