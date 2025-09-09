/*class rectangle{
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
console.log(rect.height);*/


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
}
const person1=new person("broo","pizza",20)
console.log(person1.fname);
console.log(person1.lname);
console.log(person1.age)