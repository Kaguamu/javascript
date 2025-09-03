
const person1={
    firstName:"bro",
    lastName:"code",
    age:39,
    sayHello:function(){console.log(`your name is ${person1.firstName} you are ${person1.age} years old`);
}
}
person1.sayHello();

const student={
    name:"dun mutiga",
    age:30,
    is_rich:false,
    display:function(){console.log(`Your name is ${this.name} you are ${this.age} years old and you are broke ${this.is_rich}`)}
}


student.display();*/


function Person(fname,lname,age){
    this.fname=fname,
    this.lname=lname,
    this.age=age,
    this.display=function(){console.log(`you name is ${fname}${lname} you are ${age} years old`)}
}

const  person1=new Person("Dun","Mutiga",39);
const  person2=new Person("Mutiga","dan",40000);
console.log(person1. fname);
console.log(person2. lname);
console.log(person2. age)

person1.display();*/

function Car(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
}


const car1=new Car("toyota","Corolla",1994,"white");
console.log(car1.make);*/

//constructor
function Product(name,price){
    this.name=name,
    this.price=price,

    this.display=function(){console.log(`${name}:${price}`)}
}
const product1=new Product("shirt","$19.99");
const product2=new Product("pants","$29.99");


console.log(product1);
product1.display();

class Products{
      constructor(name,price){
      this.name =name,
      this.price =price
      }
      display(){
        console.log(`Product:${this.name}`);
        console.log(`Price:$${this.price.toFixed(20)}`)
      }
}
const product1=new Products("shirt",19.99);
const product2=new Products("pants",29.99);
product1.display();
product2.display();

class Mathutil{
    static  PI=22/7;
}

console.log(Mathutil.PI.toFixed(20));

let  x=3;
function one(){
    let x=2;
    console.log(x)
}
function two(){
    let x=383;
    console.log(x)
}

console.log(x);
two();
one();
let fruits=["mango","banana","orange"];
//fruits[0]="coconut";

fruits.push("avocado");
fruits.sort();
console.log(fruits);

let num=[1,2,3,4,5,6,7,8];
let fruits=["mango","banana","orange"];
let all=[...fruits,...num,...fruits];
console.log(all);

let names="duncan";
let fchar=[...names[0]]

console.log(fchar);

function OpenFridge(...foods){
    console.log(foods);
}
let food1="Pizza";
let food2="pork";
OpenFridge(food1,food2);
OpenFridge("chapo","beans");


function CombineStrings(...Strings){
    return Strings.join(" ");
}

let fullName=CombineStrings("mr","mutiga");
console.log(fullName);


