import {PI,getCircumference,getArea} from './module_example.js';
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
const fruits=document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor="yellow";
fruits[1].style.backgroundColor="blue";
fruits[2].style.backgroundColor="pink";
console.log(fruits)
const myH1=document.getElementById("h1");
myH1.style.backgroundColor="red";
const fruits=document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor="yellow"
fruits[1].style.backgroundColor="blue"
fruits[2].style.backgroundColor="green"
fruits[0].style.fontWeight="bold"
fruits[1].style.fontSize="2em"
console.log(fruits);

Array.from(fruits).forEach(fruit=> {
    fruit.style.backgroundColor="yellow"   
});

const h4elements=document.getElementsByTagName("h4");
for(let h4element of h4elements){
    h4element.style.backgroundColor="yellow";
}

h4elements[0].style.backgroundColor="blue";
console.log(h4elements)
const liElements=document.getElementsByTagName("li");
liElements[4].style.backgroundColor="pink";
for(let liElement of liElements){
    liElement.style.backgroundColor="purple";






