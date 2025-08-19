

document.getElementById("submit").onclick = function(){
    age=document.getElementById("age").value;
  
if(age>16){
    console.log("you are old enough to drive");
    if(hasLicense){
        console.log("you are good to go");
    }
    else{
        console.log("you must have a license");
    }
}
else if(age<0){
    console.log("enter a valid age");

}
else{
    console.log("you are not old enough to drive");
}
}

