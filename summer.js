function signin(){
    var signinError = document.getElementById("errorSignin");

    var username = document.forms["sform"]["user"].value;
    var passwd = document.forms["sform"]["passwd"].value;
    
    if(username=="user" && passwd=="123"){
        window.open("components/index.html");
        return true;
    }
    else{
        signinError.innerHTML = "Invalid login credentials, Please Try Again";
        signinError.style.display="block";
        return false;
    }
}
