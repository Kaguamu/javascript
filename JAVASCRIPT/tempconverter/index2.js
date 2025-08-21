const textbox=document.getElementById("textbox");
const c2f=document.getElementById("c2f");
const f2c=document.getElementById("f2c");
const results=document.getElementById("results")
let temp;

function convert(){
    if(c2f.checked){
        temp = Number(textbox.value);
        temp = temp*9/5 +32;
        results.textContent = temp + "°F";
    }  
    else if(f2c.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) *5/9;
         results.textContent = temp.toFixed(1) + "°C";
    }
    else{
        results.textContent="Select a Unit";
    }
}
