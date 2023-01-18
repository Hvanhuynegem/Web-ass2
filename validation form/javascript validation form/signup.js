const main = document.querySelector(".main");
content = main.querySelector(".scontent");
button = main.querySelector(".lform button");

button.addEventListener("click", () => {
    let pattern = /^[0-9][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    let pattern_password = /^[a-z][A-Z][0-9][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    let pattern_name = /^[a-zA-Z]*$/;
    let pattern_zip = /^[0-9][a-zA-Z]*$/;
    let x = 0;
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;
    let name = document.getElementsByName("name")[0].value;

    let zip = document.getElementsByName("ZIP")[0].value;
    //let address = document.getElementsByName("address")[0].value;
    let email = document.getElementsByName("email")[0].value;

    let country = document.getElementsByName("country")[0].value;
    let sex = document.getElementsByName("sex")[0].value;
    let language = document.getElementsByName("language")[0].value;

    //username
    if (5 <= username.length <= 12){
        if(username[0] == username[0].toUpperCase()){
            if(pattern.test(username[username.length - 1])){
                x++;
                }
            else{alert("Username must be between 5 and 12 characters long and start with a capital letter and end with a special character or number")}
            }
        else{alert("Username must be between 5 and 12 characters long and start with a capital letter and end with a special character or number")}
        }
    else{
        alert("Username must be between 5 and 12 characters long and start with a capital letter and end with a special character or number")}
    

    // password
    if (password.length <= 12){
        if(pattern_password.test(password)){
            x++;
        }
        else{alert("Password must be at least 12 characters long, 14 is better and must contain a combination of letters, numbers and special characters")}}
    else{alert("Password must be at least 12 characters long, 14 is better and must contain a combination of letters, numbers and special characters")}
    
    // i have no idea how to check whether it is a word or not!

    // name
    if(name = pattern_name.test(name)){
        x++;
    }
    else{
        alert("Name can only exist of letters!")
    }

    // country
    if (country == ""){
        alert("Please select a country")
    }
    else{
        x++;
    }

    //ZIP code
    if (zip.length == 6){
        if(parseInt(zip).length == 4){
            if(zip == pattern_zip.test(zip)){
                x++;
            }
            else{
                alert("ZIP code must be of length 6, contains 4 numbers and 2 letters!")
            }}
        else{
            alert("ZIP code must be of length 6, contains 4 numbers and 2 letters!")
        }}
    else{
        alert("ZIP code must be of length 6, contains 4 numbers and 2 letters!")
        }

    //email
    if (email.includes("@")){
        if(email.includes(".")){
            x++;
        }
        else{
            alert("Must be a valid E-mail address!")
        }}
    else{
        alert("Must be a valid E-mail address!")
        }
    
    //sex
    if (sex.toLowercase()  == "male" || sex.toLowercase() == "female"){

    }


});





document.getElementById("create-account").addEventListener("click", ValidateForm);


function ValidateForm() {
    let x = document.getElementsByName("username")[0].value;
    if (x == "") {
        alert("Username must be filled out");
        return false;
    }
}