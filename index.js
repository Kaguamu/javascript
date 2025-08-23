
const mycheckbox = document.getElementById('mycheckbox');
const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');
const paypal = document.getElementById('paypal');
const submitbtn = document.getElementById('submitbtn');
const checkresult = document.getElementById('checkresult');
const subresult = document.getElementById('subresult');

submitbtn.onclick = function(){

    if(mycheckbox.checked){
        checkresult.textContent='you are subbed-up';
    }
    else{
        checkresult.textContent='you are not subbed--up';
    }
    if(visa.checked){
        subresult.textContent='paid via visa'
    }
    else if(mastercard.checked)
        subresult.textContent='paid via mastercard'
    else if(paypal.checked)
        subresult.textContent='paid via paypal'
}

/*checkbox and radio btn*/

const mycheckbox=document.getElementById("mycheckbox");
const visa=document.getElementById("visa");
const mastercard=document.getElementById("mastercard");
const paypal=document.getElementById("paypal");
const subbtn=document.getElementById("subbtn");
const checkboxst=document.getElementById("checkboxst");
const radiost=document.getElementById("radiost");



subbtn.onclick=function(){
    if(mycheckbox.checked){
        checkboxst.textContent="you are subbed up";
    }
    else{
        checkboxst.textContent="you are not subbed up";
    }
    if(visa.checked){
        radiost.textContent="you paid via visa"
    }
    else if(mastercard.checked){
        radiost.textContent="you paid via mastercard"
    }
    else if(paypal.checked){
        radiost.textContent="you paid via paypal"
    }
    else{
        radiost.textContent="you have not paid"
    }

} 
    
/*function to combine  numbers using rest parameter*/
function sunNum(...numbers){
    return numbers;
}
const num1=1;
const num2=2;
const num3=3;
const num4=4;
const num5=5;


let numbers=sunNum(num1,num2,num3,num4);
console.log(...numbers);*/

//function to combine strings -rest  parameter
function combineStrings(...string){
    return string.join("");
}

let fullName=combineStrings("mr","Duncan");
console.log(fullName);



/*call back*/
hello(goodbye);
function hello(callback){
    console.log("hello");
    callback();
}
 function goodbye(){
    console.log("goodbye")
 }

sum(displayConsole,1,2);

function sum(callback,x,y){
    let result=x+y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
//simple grading using switch case
let grade=80;
let testscore= Math.floor(grade/10);
 console.log(testscore);


switch(testscore){
    case 10:
        console.log('A');
        break;
    case 9:
        console.log('B');
        break;
    case 8:
        console.log('C');
        break;
    case 7:
        console.log('D');
        break;
    case 6:
        console.log('E');
        break;
    case 5:
        console.log('F');
        break;
    case 4:
        console.log('Z');
        break;
    default:
        console.log("invalid grade");
}


//prompt the user using window.prompt ask for their name then trim it and capitalize the firt letter
let username=window.prompt("Enter you name ");
username=username.trim();
let firstchar = username.charAt(0);
firstchar=firstchar.toUpperCase();
let letters= username.slice(1);
username = firstchar + letters;


console.log(`you name is ${username}`);
*/
/*
let username=window.prompt("Enter your name: ");

do{
    username=window.prompt("Enter name: ");
}
while(username=== "" || username===null){
}
console.log(`Hello  ${username}`);*/
/*function to generate a randoom number
function generate(){
    let num=Math.floor(Math.random()*6)+1;
    return num;
}

let number=generate();
console.log(number);*/


//function to check if a number is even or odd
function is_even(x){
    if(x%2==0){
    return true;
    }
    else {
        return false;
    }
}

let answer=is_even(10);
console.log(answer);




//forEach() change to lowercase
let fruits=["APPLE","BANANA","MANGO","COCONUT"];
fruits.forEach(lowerCase);
fruits.forEach(display);

function display(element){
    console.log(element);
}
function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function lowerCase (element,index,array){
    array[index] = element.toLowerCase();
}
//forEach method
let numbers =[1,2,3,4,5];
numbers.forEach(triple);
numbers.forEach(display);


function double(element){
    array[index]=element * 2;
}
function triple(element,index,array){
    let ans=element*element*element;
    console.log(ans);
}
function display(element){
    console.log(element);
}




