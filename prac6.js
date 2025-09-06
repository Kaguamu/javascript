//callback function
/*function hello(callback){
    console.log("hello")
    callback();
}
function wait(){
    console.log("wait")
}
function goodbye(){
    console.log("goodbye")
}

hello(goodbye);*/

//callback with 2 function first do the sum then display the results 
/*function sum(callback,X,y){
    result = X + y;
    callback();
}

function display(){
    console.log(result);
}
sum(display,1,4);*/

//foreach()

/*let numbers=[1,2,3,4,5]
numbers.forEach(double);
console.log(numbers)

function double(element,array,index){
    array[index] = element *2;
}*/

//foreach to display all the content  in an array
/*let nums=[1,2,3,4,5,6,8]
nums.forEach(disp)

function disp(elements){
    console.log(elements*2)
}
//forEach method with function of uppercase and lowercase
const fruits=["orange", "banana", "Mango"]
fruits.forEach(uppercase)
fruits.forEach(lowercase)
console.log(fruits);
function uppercase(element,index,array){
    array[index] =element.toUpperCase();
}
function lowercase(element,index,array){
    array[index] =element.toLowerCase();
}*/

//for each with functions to capitalize the first element 
/*let name=["peter","kamau"];
name.forEach(capfirstchar)
console.log(name)

function capfirstchar(element,index,array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}
*/
//using map() to double and triple an array
/*let numbers=[1,2,3,4,5,6,7,8,9]
let doubles=numbers.map(double);
console.log(doubles)

let cubes=numbers.map(cube);
console.log(cubes)

function double(element){
    return element*element;
}
function cube(element){
    return element*element*element;
}*/


//map method 
/*let names=["shem","mbandu"]

let uppername = names.map(uppercase);
console.log(uppername);

let bestname = names.map(fcharupper);
console.log(bestname);

function uppercase(element){
    return element.toUpperCase();
}

function fcharupper(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
}*/

//filter creates a new array by filtering out elements
/* filtering out even and odd numbers
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let evenNums=numbers.filter(is_Even);
console.log(evenNums);
let oddNums=numbers.filter(is_Odd);
console.log(oddNums);

function is_Even(element){
    return element%2===0;
}
function is_Odd(element){
    return element%2!==0;
}*/

//reduce- reduces elements of an array into a single value
/* reduce by adding
let prices=[12,12,1,13,14,14]
let totalPrice=prices.reduce(total);
console.log(totalPrice)

function total(accumulator,element){
    return accumulator + element;
}*/
//setTimeout
/*
setTimeout(function(){
    console.log("hello user");
},2000);*/


/*using map and function expresssion 
let number=[1,2,3,4,5,6]
let square=number.map(function squares(element){
    return Math.pow(element,2)
})
console.log(square)*/

/*arrow function for 👆
*/
/*let numbers=[1,2,3,4,5,6]

let square=numbers.map((element)=>Math.pow(element,2))
let double=numbers.map((element) => element*2)
console.log(square)
console.log(double)*/


/*objects
const person={
    firstname:"duncan",
    lname:"myb",
    age:99,
    is_broke:true,
    //sayHello:function(){console.log(`your name is ${this.firstname} you are ${this.age} years old`)}
    sayHello:() => {console.log(`your name is ${this.firstname} you are ${this.age} years old`)}
}

person.sayHello();
console.log(person.firstname)
*/

//construtor=> special method to write objects useful for code readability

/*function Car(make, model, year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color

    /*this.display=function(){
        console.log(`you drive a ${color},${year},${make},${model}.`)
    }
    this.display= () => console.log(`you drive a ${color},${year},${make},${model}.`)
    }

const car1=new Car("Toyota", "Corolla", "2006","black");

car1.display();*/

/*class Car{
    constructor(make, model, year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
    }
    display= () => console.log(`you drive a ${this.color},${this.year},${this.make},${this.model}.`)
}
const car1=new Car("Toyota", "Corolla", "2006","black");
const car2= new Car("Lamboghini","Urus",2025,"white");

car1.display();
car2.display();
console.log(car2.model)*/

//class and static keyword
/*
class animals{
    static alive=true;
    constructor(name,age,movement){
        this.name=name,
        this.age=age,
        this.movement=movement
    }
    display = () => {console.log(`this is a ${this.name} it is ${this.age} years old it moves by ${this.movement}`)}
}

let Rabbit=new animals("rabbit",2,"running");
const Hawk= new animals("hawk",38,"flying");

Rabbit.display();
Hawk.display();
console.log(animals.alive)
*/
class user{
    static usercount=0;
    constructor(name,age){
        this.name=name,
        this.age=age
        user.usercount++;
    }
    display=()=> {console.log(`${this.name} ${this.age}`)}
}
const user1=new user("bro",39);
const user2=new user("bro",39);
const user3=new user("bro",39);
const user4=new user("bro",39);
const user5=new user("bro",39);

user1.display();
console.log(user.usercount)




