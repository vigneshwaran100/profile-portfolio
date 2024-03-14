function validateform(){
    var username=document.getElementById("username").value;
    var passward=document.getElementById("password").value;
    if(username==='' || passward=== ''){
        alert("please fill in all the form");
        return false;
    }
    return true;

}