const signup = document.getElementById("signup");
const email = document.getElementById("email");
const password = document.getElementById("password");
const eye = document.getElementById("eye");

var regemail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
var regpassword = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;


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


function checkinput(){
    var retvalue=true;
    const emailvalue = email.value;
    const passwordvalue = password.value;
    
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

    if(passwordvalue.trim() ==""){
        setErrorFor(password,"This field cannot be blank")
        retvalue=false;
    }
    else if(!regpassword.test(passwordvalue)){
        setErrorFor(password,"Invalid format")
        retvalue=false;
    }
    else{
        setSuccessFor(password)
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


