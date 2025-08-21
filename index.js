
const mycheckbox = document.getElementById('mycheckbox');
const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');
const paypal = document.getElementById('paypal');
const submitbtn = document.getElementById('submitbtn');
const checkresult = document.getElementById('checkresult');
const subresult = document.getElementById('subresult');

submitbtn.onclick = function(){

    if(mycheckbox.checked){
        checkresult.textContent='you are subbed-up';
    }
    else{
        checkresult.textContent='you are not subbed--up';
    }
    if(visa.checked){
        subresult.textContent='paid via visa'
    }
    else if(mastercard.checked)
        subresult.textContent='paid via mastercard'
    else if(paypal.checked)
        subresult.textContent='paid via paypal'
}

/*checkbox and radio btn*/

const mycheckbox=document.getElementById("mycheckbox");
const visa=document.getElementById("visa");
const mastercard=document.getElementById("mastercard");
const paypal=document.getElementById("paypal");
const subbtn=document.getElementById("subbtn");
const checkboxst=document.getElementById("checkboxst");
const radiost=document.getElementById("radiost");



subbtn.onclick=function(){
    if(mycheckbox.checked){
        checkboxst.textContent="you are subbed up";
    }
    else{
        checkboxst.textContent="you are not subbed up";
    }
    if(visa.checked){
        radiost.textContent="you paid via visa"
    }
    else if(mastercard.checked){
        radiost.textContent="you paid via mastercard"
    }
    else if(paypal.checked){
        radiost.textContent="you paid via paypal"
    }
    else{
        radiost.textContent="you have not paid"
    }

} */

