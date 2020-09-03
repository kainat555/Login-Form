function formSubmit(){
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    if(name.value.length === 0 || password.value.length === 0){
        alert("Please input all fields!");
        return false;
    }
    // window.location.replace = 
    // "submitted.html"
    // ;
    alert("Thank you..Your form has been submitted successfully!!");
}