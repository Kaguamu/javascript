/*var hello=function(){
    console.log("hello user")
}

hello();*/


/*setTimeout(function(){
    console.log("hello user")
},2000)*/
/*const num=[1,2,3,4,5,6,8];
const squares= num.map(function (element){
    return Math.pow(element,2);
});
console.log(squares);*/

/*const hello=() => console.log("Hello");
hello();
*/

/*const hello=(name,age) => {console.log(`hello ${name}`);
                    console.log(`you are ${age} years old`)}
hello("bro",39);*/

//function expression
/*setTimeout(function (){
    console.log("hi")
},2000);
setTimeout(function (){
    console.log("how was your day")
},4000);
setTimeout(function mine(){
    console.log("mine was also good")
},6000);*/

//arrow function parameter=> some code
/*setTimeout(() => console.log("hi"),2000)
setTimeout(() => console.log("how was your day"),3000)
setTimeout(() => console.log("mine was also cool"),4000)*/

/*const numbers=[1,2,3,4,5,6];
//const even_numbers=numbers.filter(function(element){
//    return element%2==0;
//});
//console.log(even_numbers);

const even_numbers=numbers.filter((element) => element%2==0);
console.log(even_numbers);

/*const num=[1,2,3,4,5,6,7];
const doubles=num.map(function(element){
    return element*2;
});
console.log(doubles);*/

/*
const num=[1,2,3,4,5,6,7];
const double=num.map((element) => Math.pow(element,2));
console.log(double);
*/

/*
const num=[1,2,3,4,5,6,8];
const totals=num.reduce(
function total(accumulator,element){
    return accumulator+element;
}
);
console.log(totals);*/
/*const numbers=[3,2,3,4,5,6,7];
//const cubes=numbers.map((element)=> Math.pow(element,3));
const cubes = numbers.map(function(element){
    return Math.pow(element,3)
})
console.log(cubes);


function cube(element){
    return Math.pow(element,3)
}*/


const person  ={
    firstName:"bro",
    lastName:"code",
    age:90,
    is_employed:false,
}
console.log(person.firstName);










