
//object
const product={
    pname:"shirt",
    price:"$19.99",
    display:function(){console.log(`this is a ${this.pname} and it cost ${this.price}`)}
}
product.display();
//constructor
function Product(name,price){
    this.name=name,
    this.price=price,
    this.disp=function(){console.log(`this is a ${this.name} and it cost ${this.price}`)};
}
let product1= new Product("Pants","$29.99");

console.log(product1.name);
console.log(product1.price);
product1.disp();

//class
class Produce{
    constructor(names,prices){
        this.names=names,
        this.prices=prices
    }
    displa(){console.log(`this is a ${this.names} and it cost ${this.prices}`)};
}

let product100=new Produce("Skirt","$29.99");
console.log(product100);

product100.displa();*/

//static

class Mathutil{
    static PI=3.142857142857;

    static getDiameter(radius){
        return radius*2
    }
}
console.log(Mathutil.PI);
console.log(Mathutil.getDiameter(10));

class user{
    static usercount=0;

    constructor(name){
        this.name=name;
        this.usercount++;
    }
}

const user1=new user("duncan")
console.log(user1.name);

class user{
    static usercount=0;

    constructor(name){
        this.name=name;
        user.usercount++
    }
    dispname(){
        console.log(`your username is ${this.name}`);
    }
    static getUsercount(){
        console.log(`there are ${user.usercount} counts`)
    }
}

const user1=new user("duncan");
const user2=new user("dunc");
const user3=new user("du");

console.log(user1.name);
console.log(user2.name);
console.log(user3.name);
console.log(user.usercount)
user1.dispname();
user.getUsercount();

//inheritance
class animal{
    static alive=true;

    eat(){
        console.log(`the ${this.name} is eating`);
    }
    sleep(){
        console.log(`the ${this.name} is sleeping`);
    }
}

class Rabbit extends animal{
    name="rabbit";

    run(){
        console.log(`this ${this.name}is running`)
    }
}
class Fish extends animal{
    name="fish";
    swim(){
        console.log(`this ${this.name}is swimming`)
    }
}
class Hawk extends animal{
    name="hawk";
    fly(){
        console.log(`this ${this.name}is flying`)
    }
} 
const rabbit= new Rabbit();
const fish= new Fish();
const hawk= new Hawk();

console.log(Rabbit.alive);
console.log(rabbit);
rabbit.eat();
rabbit.run();


console.log(Hawk.alive);
console.log(hawk);
hawk.eat();
hawk.fly();

console.log(Fish.alive);
console.log(fish);
fish.eat();
fish.swim();

/*class People{
    constructor(name, age, occupation){
    this.name=name,
    this.age=age,
    this.occupation=occupation
    } 
    
}
class student extends People{
    constructor(name, age, occupation){
    super(name, age, occupation)
    this.display=function(){console.log(`your name is ${this.name} you are ${this.age} and your occupation is ${this.occupation}`)}
    
    }
}
class workers extends People{
    constructor(name, age, occupation){
    super(name, age, occupation)
    this.display=function(){console.log(`your name is ${this.name} you are ${this.age} and your occupation is ${this.occupation}`)}
    }
}
class billionares extends People{
    constructor(name,age,occupation){
    super(name, age, occupation)
    this.display=function(){console.log(`your name is ${this.name} you are ${this.age} and your occupation is ${this.occupation}`)}
    
    }
}
const Student=new student("Peter",29,"reading")
const Worker=new workers("gtp",29,"labour")
const Billionare=new billionares("Peter",29,"Binesses")

console.log(Student.name);
Student.display();
Billionare.display();*/


class rectangle{
    constructor(width,height){
        this.width=width,
        this.height=height
    }

    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth
        }
        else{
            console.error("width must be a  positive number")
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height=newHeight
        }
        else{
            console.error("height must be a  positive number")
        }
    }
    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }
 
}
const rec = new rectangle(800,90);
console.log(rec.height);
console.log(rec.width);








