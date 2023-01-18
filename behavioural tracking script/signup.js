let mouse_clicks = 0;
let total_time = 0;
let keys_clicked = 0;
let start_time = 0;
let char_count = 0;
let total_minutes = 0;
let total_seconds = 0;


function logMouse(){
    mouse_clicks++;
}

function logTime(){
    const end_time = new Date().getTime();
    total_time = (end_time - start_time)/1000;
    if (total_time > 60) {
        total_minutes = Math.floor(total_time/60);
        total_seconds = Math.round((total_time - (total_minutes * 60)), 1);
    }
    else{
        total_seconds = Math.round(total_time,1);
        total_minutes = 0;
    }
    return("Total time spent: " + total_minutes.toString() + " minutes and " + total_seconds.toString() + " seconds");
}

function logPress(){
    keys_clicked++;
} 

function logChar(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    const zip = document.getElementById("ZIP").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    const country = document.getElementById("country").value;
    const sex = document.getElementById("sex").value;
    const language = document.getElementById("language").value;
    const about = document.getElementById("about").value;
    
    char_count = username.length +password.length +  name.length + zip.length + address.length + email.length + country.length + sex.length + language.length + about.length;
    return ("Total number of characters typed: " + char_count);
}

function showResults(){
    const results = document.createElement("div");
    results.id = "results";
    results.innerHTML = "Number of mouse clicks: " + mouse_clicks.toString()
    results.innerHTML = logTime();
    results.innerHTML = "Total key presses: " + keys_clicked.toString();
    results.innerHTML = logChar();
    document.body.appendChild(results);
}



document.addEventListener('DOMContentLoaded', () => {
    start_time = new Date().getTime();
});