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


