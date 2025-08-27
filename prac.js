
for(let i=10;i>=1;i--){
    if(i==6){
        continue;
    }
    console.log(i);
}
//function to multiply 2 numbers
function multiply(x,y){
    let result=x*y;
    return result;
}
let answer=multiply(4,8);
console.log(answer);

//function to check if an email is valid
function is_valid(email){
    return email.includes("@")
}
let valid=is_valid("duncangmail.com");
console.log(valid);*/

//prac on arrays
let fruits=["banana","mango","orange"];
fruits.pop();
fruits.unshift("coconut");
fruits.sort().reverse;

for(fruit of fruits){
    console.log(fruit);
}
let index=fruits.indexO   f("mango");
console.log(index);


//array with numbers
let num=[1,2,3,4,5,6]
let maxnum=Math.min(...num);
console.log(maxnum);

//prac on using (...rest) operator
const fname = "Mr";
const sname = "Duncan";

function your_name(...fullname){
    console.log(fullname);
}
your_name(fname,sname);

//prac on callbacks
hello(goodbye)
function hello(callback){
    console.log("hello");
    callback();
}

function wait(){
    console.log("wait a minute");
}
function goodbye(){
    console.log("goodbye");
}
function seeya(){
    console.log("see yall");
}

//callback
add(displayconsole,2,3);
function add(callback,x,y){
    let result = x+y;
    callback(result);
}
function displayconsole(result){
    console.log(result)
}

//prac on forEach
let us=["kai", "key", "me"]
us.forEach(show_us);
function show_us(element){
    console.log(element)
}
//prac on forEach()
let user="duncan";
user.forEach(capitaliz);
user.forEach(display);
function capitaliz(element,array,index){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
    console.log
}

//map()accepts a callback and applies that function to each element of an array, then return a new array
const num=[1,2,3,4,5]

const squares =num.map(square);
console.log(squares);
function square(element){
    return Math.pow(element,2);
}
function dis(){
    console.log(element);
}

//prac on map()
const students=["Kai","Kay","Me"]
const upstudents=students.map(uppercase);
const lostudents=students.map(lowercase);
console.log(lostudents);

function uppercase(element){
    return element.toUpperCase();   
}
function lowercase(element){
    return element.toLowerCase();   
}
//date formating prac on map()
const date=["9/14/2025","3/4/2026","1/24/2030"];
const formdate=date.map(formatdate);
console.log(formdate);


function formatdate(element){
    const parts=element.split("/");
    return `${parts[2]}-${parts[0]}-${parts[1]}`
}

// Filter out the even number using the .filter()method
let number=[1,2,3,4,5,6,7,8];
let  evenNum= number.filter(isEven);
console.log(evenNum);

function isEven(element){
    return element%2===0;
}


//filtering  out adults in the  list of ages
let  ages=[16,14,19,19,20,21,23,24,34,56,43,22];
let  adults=ages.filter(isAdult);
console.log(adults);


function isAdult(element){
    return element>=18;
}
// an application of filter to get words that have less than 6 chars
const words =["orange","banana","mango","coconut","pamanganete"]
const shortword =  words.filter(shword);
console.log(shortword);

function shword(element){
    return element.length <= 6;
}


let prices=[10,20,30,40,50];

const answer=prices.reduce(sum);
console.log(answer);


function sum(accumulator,element){
    return accumulator + element;
}*/

const grades=[50,55,99,96,89,90];
const highest=grades.reduce(high);
console.log(high);


function high(element){
    return Math.max(element);
}

//function expression
function hello(){
    console.log("hello");
}
hello();

const hi= function(){
    console.log("Hi user");
}
hi();













