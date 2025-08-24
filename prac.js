/*for(let i=10;i>=1;i--){
    if(i==6){
        continue;
    }
    console.log(i);
}*/

/*
function multiply(x,y){
    let result=x*y;
    return result;
}
let answer=multiply(4,8);
console.log(answer);
*/

/*
function is_valid(email){
    return email.includes("@")
}


let valid=is_valid("duncangmail.com");
console.log(valid);*/
/*
let fruits=["banana","mango","orange"];
fruits.pop();
fruits.unshift("coconut");
fruits.sort().reverse;

for(fruit of fruits){
    console.log(fruit);
}
let index=fruits.indexO   f("mango");
console.log(index);
*/

/*
let num=[1,2,3,4,5,6]
let maxnum=Math.min(...num);
console.log(maxnum);
*/

/*
const fname = "Mr";
const sname = "Duncan";

function your_name(...fullname){
    console.log(fullname);
}
your_name(fname,sname);
*/

/*
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
*/

/*
add(displayconsole,2,3);
function add(callback,x,y){
    let result = x+y;
    callback(result);
}
function displayconsole(result){
    console.log(result)
}*/
/*
let us=["kai", "key", "me"]
us.forEach(show_us);


function show_us(element){
    console.log(element)
}
*/

/*

let user="duncan";


user.forEach(capitaliz);
user.forEach(display);
function capitaliz(element,array,index){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
    console.log
}*/

//map()accepts a callback and applies that function to each element of an array, then return a new array
/*const num=[1,2,3,4,5]

const squares =num.map(square);
console.log(squares);
function square(element){
    return Math.pow(element,2);
}
function dis(){
    console.log(element);
}*/



/*
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
*/

const date=["9/14/2025","3/4/2026","1/24/2030"];
const formdate=date.map(formatdate);
console.log(formdate);


function formatdate(element){
    const parts=element.split("/");
    return `${parts[2]}-${parts[0]}-${parts[1]}`
}



