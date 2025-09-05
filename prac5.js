
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
user.getUsercount();*/




