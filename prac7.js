//working with setter and getter
class rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height
    }
    set width(newWidth){
        if(newWidth>0){
           this._width=newWidth
        }
        else{
            console.log("the width must be positive");
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight
        }
        else{
            console.log("the height must be positive");
        }
    }
    get width(){
        return this._width.toFixed(2)
    }
    get height(){
        return this._height.toFixed(2)
    }
}

const rect = new rectangle(10,20);
console.log(rect.width);
console.log(rect.height);

//more practise with setter and getter to check whether the input name and age are valid
class person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname,
        this.age=age
    }
    set fname(newFname){
        if(typeof newFname==="string" && newFname.length > 0){
            this._fname=newFname;
        }
        else{
            console.error("the first name is invalid")
        }
    }
    set lname(newLname){
        if(typeof newLname==="string" && newLname.length>0){
            this._lname=newLname;
        }
        else{
            console.error("the last name is invalid")
        }
    }
    set age(newAge){
        if(typeof newAge==="number" && newAge>0){
            this._age=newAge
        }
        else{
            console.log("the age is invalid")
        }
    }
    get fname(){
        return this._fname
    }
    get lname(){
        return this._lname
    }
    get age(){
        return this._age
    }
    get fullname(){
        return this._fname + " " + this._lname
    }
}
const person1=new person("broo","pizza",20)
console.log(person1.fname);
console.log(person1.lname);
console.log(person1.fullname)
console.log(person1.age)

//destructuring
//swapping the values of 2 variables
let a=10;
let b=20;
[a, b]=[b,a];
console.log(b);

//swapping 2 elements in an array
const colors=["red","green","maroon","violet","purple"];
[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors);


//assigning array elements to a variable
let colors=["red","green","maroon","violet","purple"];
let [fcolor,scolor,thirdcolor,lastcolor,...extracolors] = colors;
console.log(fcolor);
console.log(scolor);
console.log(thirdcolor)
console.log(lastcolor)
console.log(extracolors)

//extract values from an object
const Person={
    firstname:"bro",
    secondname:"ccode",
    age:101,
    job:"Youtuber"
}
const Person2={
    firstname:"Sponge",
    secondname:"bob",
    age:30,
    job:"actor"
}

const {firstname,secondname,age,job} = Person2;
console.log(firstname + " " + secondname);

//destructure in function parameter
function displayPerson({firstname,secondname,age,job}){
    console.log(`name:${firstname} ${secondname}`)
    console.log(`Age:${age}`)
    console.log(`${job}`)
}
const Person={
    firstname:"bro",
    secondname:"ccode",
    age:101,
    job:"Youtuber"
}
displayPerson(Person);
//NESTED OBJECTS
const person={
    fullname:"bro code",
    age:30,
    is_student:false,
    job:"youtuber",
    address:{
        street:"tom",
        city:"Nairobi",
        country:"Uganda"
    }
}

for(const property in person.address){
    console.log(person.address[property])
}

//more complex nested object use  of class
class Person {
    constructor(name,age,...address){
    this.name=name;
    this.age=age;
    this.address = new Address(...address)
}
}
class Address{
    constructor(street,country,city){
    this.street=street;
    this.country=country;
    this.city=city;
    }
}

const person1=new Person("bro",30,"1234 conch",
                                  "Int waters",
                                  "Bikini bottom");
const person2=new Person("patrick",37,"1324 conch",
                                  "Int waters",
                                  "Bikini bottom")
console.log(person1)
console.log(person2.address)


//array of object 
const fruits =[{name:"banana",color:"yellow",calories:40},
               {name:"pineapple",color:"yellow",calories:50},
               {name:"orange",color:"orange",calories:60},
               {name:"mango",color:"yellow",calories:95}];

fruits.unshift({name:"coconut",color:"brown",calories:40})        
console.log(fruits[0])
//using forEach to display all the elements
fruits.forEach(function display(element){
    console.log(element)
})
fruits.forEach(fruit=>console.log(fruit))


//using .map() to display the  fruit names
const fruitNames=fruits.map(fruit=>fruit.name);
console.log(fruitNames);t


//using .map() to display the  fruit color
const fruitColor=fruits.map(fruit=>fruit.color);
console.log(fruitColor);

//using the filter method to show all the fruits with the yellow color
const yellowFruits=fruits.filter(fruit=>fruit.color==="yellow");
console.log(yellowFruits);


//using filter method to show all the fruits with calories greater than 50
const highcalfruits=fruits.filter(fruit=>fruit.calories>50);
console.log(highcalfruits)


//using the reduce method to show the fruit with the highest calories
const maxFruit= fruits.reduce((accumulator,element) =>
                               element.calories>accumulator.calories ?
                                element:accumulator)

console.log(maxFruit);



