/*import {PI,getCircumference,getArea} from './module_example.js';
 
console.log(PI);
const Area=getArea(7);
console.log(`Area:${Area}`)
const Circumference=getCircumference(7);
console.log(`Circumference:${Circumference}`)


// using callback to handle asynchrous code
function func1(callback){
    setTimeout(()=>{console.log("task 1")
         callback()},3000);
   
}
function func2(){
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
}
func1(func2);

//error handling
try{
    console.lag(x);
}
catch(error){
    console.log(error);
}
console.log("You have reached the end!")*/


//DOM doccument object Model;

const fruits=document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor="yellow";
fruits[1].style.backgroundColor="blue";
fruits[2].style.backgroundColor="pink";

console.log(fruits)