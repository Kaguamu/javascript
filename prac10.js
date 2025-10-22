//Add and change HTML using Javascript
// creating the element
const newH1=document.createElement("h1");
//add attributes or properties
newH1.textContent="i like pizza";
newH1.style.color="tomato"
newH1.id="newh1"
newH1.style.textAlign="center"
//APPEND ELEMENT TO DOM
document.body.append(newH1);
document.getElementById("box2").append(newh1);


//inserting element at certain points
//const box3=document.getElementById("box3")
document.body.insertBefore(newH1,box1);*/

const listItems = document.createElement("li");
listItems.style.fontSize = "2em"
listItems.textContent = "Coconut";
const orange=document.getElementById("orange");
// document.getElementById("fruits").append(listItems);
document.getElementById("fruits").insertBefore(listItems,orange);
//mouse events
const box=document.getElementById("box");
box.addEventListener("click",function changeColor(event){
    event.target.style.backgroundColor="red"
    event.target.style.textContent="Stop
});

box.addEventListener("mouseover",function changeColor(event){
    event.target.style.backgroundColor="yellow"
    event.target.style.textContent="Don't do it😲"
});

box.addEventListener("mouseout",function changeColor(event){
    event.target.style.backgroundColor="greenyellow"
    event.target.style.textContent="Click me😅"
});

