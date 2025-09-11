//sorting an array with strings 
let fruits=["orange","banana","apple","mango","coconut"];
fruits.sort();
console.log(fruits);

//sorting numbers
let number=[7,5,4,3,8,9,10,1,2]
number.sort();
console.log(number);

//sorting lexicographically
let numbers=[7,5,4,3,8,9,10,1,2]
numbers.sort((a, b) => b - a);
console.log(numbers);

//sorting people by age
let people=[{name:"bro",age:40,gpa:4.0},
            {name:"code",age:30,gpa:2.0},
            {name:"spongebob",age:37,gpa:3.5}];
people.sort((a,b)=>a.age-b.age);
console.log(people);

//sorting by gpa
let persons=[{name:"bro",age:40,gpa:4.0.toFixed(1)},
            {name:"code",age:30,gpa:2.0.toFixed(1)},
            {name:"spongebob",age:37,gpa:3.5}];
persons.sort((a,b)=>a.gpa-b.gpa);
console.log(persons);

//sorting by name
let person=[{name:"spongebob",age:37,gpa:3.5},
            {name:"bro",age:40,gpa:4.0.toFixed(1)},
            {name:"code",age:30,gpa:2.0.toFixed(1)}];
person.sort((a,b)=> a.name.localeCompare(b.name));

console.log(person);

//shuffle an array(deck of card);
//using the Fisher-Yates algorithm
const cards=['A',1,2,3,4,5,6,7,8,9,10,'J','Q','K'];
shuffle(cards);
console.log(cards)
function shuffle(array){
    for(let i=array.length-1; i>0 ; i--){
        const random=Math.floor(Math.random()* (i+1));

        [array[i],array[random]]=[array[random],array[i]]
    }
}
const date=new Date();
const year=date.getFullYear();
console.log(year)*/

//closure
function outer(){
    let name="bro code";
     
    function inner(){
        console.log(name)
       
    }
    inner();
}
outer();
let count=0;
do{
    count++;
    console.log(`the count increased by ${count}`)
}
while(count<100)


function createCounter(){
    let count=0;

    function increment(){
    count++;
    console.log(`the count increased by ${count}`)
    }
    return {increment};
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();


//game scoring system using closure 
function createGame(){
    let score=0;
function increaseScore(points){
    score += points;
    console.log(`+${points}pts`)
}
function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`)
}

function getScore(){
    return score;
}
return{increaseScore,decreaseScore,getScore}
}

const game = createGame();

game.increaseScore(10);
game.increaseScore(2);
game.decreaseScore(300);
console.log(`the final score is ${game.getScore()}pts`);

