
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

/*function to combine strings -rest  parameter
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

