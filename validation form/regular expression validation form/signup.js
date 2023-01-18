const form = document.querySelector("#signup-form");

const username = document.getElementById("username");
const usernameValidity = document.getElementById("username-validity");
const password = document.getElementById("password");
const passwordValidity = document.getElementById("password-validity");
const name = document.getElementById("name");
const nameValidity = document.getElementById("name-validity");

const zip = document.getElementById("ZIP");
const zipValidity = document.getElementById("zip-validity");
const email = document.getElementById("email");
const emailValidity = document.getElementById("email-validity");

const country = document.getElementById("country");
const countryValidity = document.getElementById("country-validity");
const sex = document.getElementById("sex");
const sexValidity = document.getElementById("sex-validity");
const language = document.getElementById("language");
const languageValidity = document.getElementById("language-validity");

const address = document.getElementById("address");
const addressValidity = document.getElementById("address-validity");


const username_pattern = new RegExp("([A-Z].{3,10}[^a-zA-Z])$");
const password_pattern = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^0-9a-zA-Z]).{12,}$");
const name_pattern = new RegExp("[a-zA-Z]+$");

const zip_pattern = new RegExp("[0-9]{4}[a-zA-Z]{2}$");
const email_pattern = new RegExp("[a-z0-9!#$%&'*+\-=?^_`{|}~](\.?[a-z0-9!#$%&'*+\-=?^_`{|}~])*@[a-z0-9.\-]+\.[a-z]{2,}$");

const country_pattern = new RegExp(".+$");
const sex_pattern = new RegExp(".+$");
const language_pattern = new RegExp(".+$");



const checkUsername = (username) => {
    return username_pattern.test(username);
};

const checkPassword = (password) => {
    return password_pattern.test(password);
};

const checkName = (name) => {
    return name_pattern.test(name);
};

const checkZip = (zip) => {
    return zip_pattern.test(zip);
};

const checkEmail = (email) => {
    return email_pattern.test(email);
};

const checkCountry = (country) => {
    return country_pattern.test(country);
};

const checkSex = (sex) => {
    return sex_pattern.test(sex);
};

const checkLanguage = (language) => {
    return language_pattern.test(language);
};

username.addEventListener("input", function() {
    if (checkUsername(username.value)) {
        username.setCustomValidity("");
        usernameValidity.innerHTML = "Looking good!";

    } else {
        username.setCustomValidity("Username must be between 5 and 12 characters, first character must be a capital letter, last character must be a special character");
        usernameValidity.innerHTML = "Username must be between 5 and 12 characters, first character must be a capital letter, last character must be a special character";
    }
});

password.addEventListener("input", function() {
    if (checkPassword(password.value)) {
        password.setCustomValidity("");
        passwordValidity.innerHTML = "Looking nice!";
    } else {
        password.setCustomValidity("Password must be more than 12 characters, must contain at least one capital letter, one small letter, one digit and one special character");
        passwordValidity.innerHTML = "Password must be more than 12 characters, must contain at least one capital letter, one small letter, one digit and one special character";
    }
});

name.addEventListener("input", function() {
    if (checkName(name.value)) {
        name.setCustomValidity("");
        nameValidity.innerHTML = "Looking super!";
    } else {
        name.setCustomValidity("Name must be at least 1 character, and contain only letters");
        nameValidity.innerHTML = "Name must be at least 1 character, and contain only letters";
    }
});

zip.addEventListener("input", function() {
    if (checkZip(zip.value)) {
        zip.setCustomValidity("");
        zipValidity.innerHTML = "Great job in filling in!";
    } else {
        zip.setCustomValidity("ZIP must be 4 digits, followed by 2 letters");
        zipValidity.innerHTML = "ZIP must be 4 digits, followed by 2 letters";
    }
});

email.addEventListener("input", function() {
    if (checkEmail(email.value)) {
        email.setCustomValidity("");
        emailValidity.innerHTML = "Meow!";
    } else {
        email.setCustomValidity("Email must be in the format: [letters, numbers or special characters]@[letters or -].[letters]");
        emailValidity.innerHTML = "Email must be in the format: [letters, numbers or special characters]@[letters or -].[letters]";
    }
});

country.addEventListener("input", function() {
    if (checkCountry(country.value)) {
        country.setCustomValidity("");
        countryValidity.innerHTML = "Beatiful!";
    } else {
        country.setCustomValidity("Country must contain only letters and spaces");
        countryValidity.innerHTML = "Country must contain only letters and spaces";
    }
});

address.addEventListener("input", function() {
    if (checkAddress(address.value)) {
        address.setCustomValidity("");
        addressValidity.innerHTML = "Done!";
    } else {
        address.setCustomValidity("Address must contain only letters, numbers, spaces, commas, dots, dashes and apostrophes");
        addressValidity.innerHTML = "Address must contain only letters, numbers, spaces, commas, dots, dashes and apostrophes";
    }
});

sex.addEventListener("input", function() {
    if (checkSex(sex.value)) {
        sex.setCustomValidity("");
        sexValidity.innerHTML = "Done!";
    } else {
        sex.setCustomValidity("Sex must be at least one character long");
        sexValidity.innerHTML = "Write 'does not exist' if you don't have one";
    }
});

email.setCustomValidity("You must provide email");
zip.setCustomValidity("You must provide zip");
name.setCustomValidity("You must provide name");
sex.setCustomValidity("You must provide sex");
username.setCustomValidity("You must provide username");
country.setCustomValidity("You must provide country");
password.setCustomValidity("You must provide password");




