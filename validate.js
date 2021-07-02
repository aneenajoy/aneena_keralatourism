const signup = document.getElementById("signup");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const retype = document.getElementById("retype");
const eye = document.getElementById("eye");



let timeout;
let strengthBadge = document.getElementById('StrengthDisp');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{6,}))')
var regname = /^[A-Za-z]+$/;
var regemail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
var regphone = /^([0-9]{3})([ \.-]?)([0-9]{3})([ \.-]?)([0-9]{4})$/;


function StrengthChecker(PasswordParameter) {
    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
        return true;
    } else if(mediumPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = 'orange';
        strengthBadge.textContent = 'Medium';
        return false;
    } else {
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Weak';
        return false;
    }
}

password.addEventListener("input", () => {
    strengthBadge.style.display = 'block';
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(password.value), 500);
    if(password.value.length !== 0) {
        strengthBadge.style.display != 'block';
    } else {
        strengthBadge.style.display = 'none';
    }
});


//password eye toggling function
eye.addEventListener("click", function(e){
    if(password.getAttribute("type")=="password"){
        password.setAttribute("type","text");
        eye.style.color="green"
    }
    else{
        password.setAttribute("type","password");
        eye.style.color="grey"
    }
});


function checkinputs(){
    var retvalue=true;
    const firstvalue = first.value;
    const lastvalue = last.value;
    const emailvalue = email.value;
    const phonevalue = phone.value;
    const passwordvalue = password.value;
    const retypevalue = retype.value;
    
    if(firstvalue.trim() ==""){
        setErrorFor(first,"This field cannot be blank")
        retvalue=false;
    }
    else if(!regname.test(firstvalue)){
        setErrorFor(first,"Only alphabets allowed")
        retvalue=false;
    }
    else{
        setSuccessFor(first)
    }

   
    if(lastvalue.trim() ==""){
        setErrorFor(last,"This field cannot be blank")
        retvalue=false;
    }
    else if(!regname.test(lastvalue)){
        setErrorFor(last,"Only alphabets allowed")
        retvalue=false;
    }
    else{
        setSuccessFor(last)
    }
 
    
    if(emailvalue.trim() ==""){
        setErrorFor(email,"This field cannot be blank")
        retvalue=false;
    }
    else if(!regemail.test(emailvalue)){
        setErrorFor(email,"Invalid format")
        retvalue=false;
    }
    else{
        setSuccessFor(email);
    }

    
    if(phonevalue.trim() ==""){
        setErrorFor(phone,"This field cannot be blank")
        retvalue=false;
    }
    else if(!regphone.test(phonevalue)){
        setErrorFor(phone,"Invalid format")
        retvalue=false;
    }
    else{
        setSuccessFor(phone)
    }
   


    if(passwordvalue.trim() ==""){
        setErrorFor(password,"This field cannot be blank")
        retvalue=false;
    }
    else{
        setSuccessFor(password)
    }


    if(retypevalue.trim() ==""){
        setErrorFor(retype,"This field cannot be blank")
        retvalue=false;
    }
    else if(passwordvalue!==retypevalue){
        setErrorFor(retype,"Password doesn't match")
        retvalue=false;
    }
    else{
        setSuccessFor(retype)
    }
return retvalue;
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    return true;
}

function success(){
    if(checkinputs()==true && StrengthChecker(PasswordParameter)==true){
        return true;
    }
    else{
        return false;
    }
}

