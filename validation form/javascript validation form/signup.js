
const form = document.querySelector("form");
const emailError = document.querySelector("#email + span.error");

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

// function to check that the username is valid
// it must be between 5 and 12 chars, first char is capital letter, last one is a special character
// no regular expressions!
function checkUsername(str) {
    let valid = false;
    const min = 5,
        max = 12;
    const first = str[0];
    const last = str[str.length - 1];
    if (
        username.value.length >= 5 && // length more than 5
        username.value.length <= 12 && // length less than 12
        first >= 'A' && first <= 'Z' && // first char is capital letter
        (   last == "!" ||
            last == "@" ||
            last == "#" ||
            last == "$" ||
            last == "%" ||
            last == "^" ||
            last == "&" ||
            last == "*" ||
            last == "(" ||
            last == ")" ||
            last == "-" ||
            last == "_" ||
            last == "+" ||
            last == "=" ||
            last == "{" ||
            last == "}" ||
            last == "[" ||
            last == "]" ||
            last == "|" ||
            last == ":" ||
            last == ";" ||
            last == "'" ||
            last == '"' ||
            last == "<" ||
            last == ">" ||
            last == "," ||
            last == "." ||
            last == "?" ||
            last == "/" ||
            last == "`" ||
            last == "~" ||
            (last >= '0' && last <= '9')
        )) // last char is a special character or digit
        valid = true;

    return valid;
}

// on change of the username input, check if it is valid
username.addEventListener("input", function() {
    if (checkUsername(username.value)) {
        username.setCustomValidity("");
        usernameValidity.innerHTML = "Looking good!";

    } else {
        username.setCustomValidity("Username must be between 5 and 12 characters, first character must be a capital letter, last character must be a special character");
        usernameValidity.innerHTML = "Username must be between 5 and 12 characters, first character must be a capital letter, last character must be a special character";
    }
});


// function to check that the password is valid
// password must be more than 12 chars, must contain at least one capital letter, one small letter, one digit and one special character

function checkPassword(str) {
    let valid = false;
    const min = 12;
    let capital = false, small = false, digit = false, special = false;

    if (password.value.length >= min) {
        for (let i = 0; i < password.value.length; i++) {
            const char = password.value[i];
            if (char >= 'A' && char <= 'Z') {
                capital = true;
            } else if (char >= 'a' && char <= 'z') {
                small = true;
            } else if (char >= '0' && char <= '9') {
                digit = true;
            } else {
                special = true;
            }
        }
    }

    if (capital && small && digit && special) {
        valid = true;
    }

    return valid;
}

// on change of the password input, check if it is valid
// if not valid, set the custom validity message
password.addEventListener("input", function() {
    if (checkPassword(password.value)) {
        password.setCustomValidity("");
        passwordValidity.innerHTML = "Looking nice!";
    } else {
        password.setCustomValidity("Password must be more than 12 characters, must contain at least one capital letter, one small letter, one digit and one special character");
        passwordValidity.innerHTML = "Password must be more than 12 characters, must contain at least one capital letter, one small letter, one digit and one special character";
    }
});

// function to check that the name is valid
// name must be more than 1 char, and contain only letters
function checkName(str) {
    let valid = false;
    const min = 1;
    if (name.value.length >= min) {
        valid = true;
        for (let i = 0; i < name.value.length; i++) {
            const char = name.value[i];
            if ((char < 'A' || char > 'Z') && (char < 'a' || char > 'z')) {
                valid = false;
            }
        }
    }

    return valid;
}

// on change of the name input, check if it is valid
// if not valid, set the custom validity message
// if valid, set the custom validity message to empty
name.addEventListener("input", function() {
    if (checkName(name.value)) {
        name.setCustomValidity("");
        nameValidity.innerHTML = "Looking super!";
    } else {
        name.setCustomValidity("Name must be at least 1 character, and contain only letters");
        nameValidity.innerHTML = "Name must be at least 1 character, and contain only letters";
    }
});

// function to check that the zip is valid
// zip must be 4 digits, followed by 2 letters
function checkZip(str) {
    let valid = false;

    const requiredLength = 6;
    if (zip.value.length == requiredLength) { // check that the length is correct
        valid = true;
        for (let i = 0; i < zip.value.length; i++) { // for every character
            const char = zip.value[i];
            if (i < 4) { // if it is one of the first 4 - check that it is number
                if (char < '0' || char > '9') {
                    valid = false;
                }
            }
            if (i >= 4) { // if it is one of the last two - check that it is a letter
                if ((char < 'A' || char > 'Z') && (char < 'a' || char > 'z')) {
                    valid = false;
                }
            }
        }
    }

    return valid;
}


// on change of the zip input, check if it is valid
// if not valid, set the custom validity message
// if valid, set the custom validity message to empty
zip.addEventListener("input", function() {
    if (checkZip(zip.value)) {
        zip.setCustomValidity("");
        zipValidity.innerHTML = "Great job in filling in!";
    } else {
        zip.setCustomValidity("ZIP must be 4 digits, followed by 2 letters");
        zipValidity.innerHTML = "ZIP must be 4 digits, followed by 2 letters";
    }
});


// function to check that the email is valid
// first character must be a letter, a number or a special character
// after that, every letter could be a letter, a number, a special character or a dot
// but not 2 consequent dots
// after the @, there must be at least 1 letter, or -, followed by a dot, followed by at least 2 letters
function checkEmail(str) {
    const special = "-+./_!@#$%^&*(){}[]|:;'<>,?`~";

    if (!email.value.includes("@")) { // check that there is an @
        return false;
    }
    // get the part before the @
    const beforeAt = email.value.split("@")[0];
    // get the part after the @
    const afterAt = email.value.split("@")[1];

    // check that the first character is a letter, a number or a special character
    const first = beforeAt[0];
    if (!((first >= '0' && first <= '9') || (first >= 'a' && first <= 'z') || (first >= 'A' && first <= 'Z')))
        return false;

    // check that the rest of the characters are letters, numbers, special characters or dots
    // but not 2 consequent dots
    for (let i = 1; i < beforeAt.length; i++) {
        const char = beforeAt[i];
        if (!((char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || special.includes(char) || char == "."))
            return false;
        if (char == "." && beforeAt[i - 1] == ".")
            return false;
    }

    // check that the part after the @ is valid
    // it must containt at least 1 letter, followed by dot, and at least two letters
    //
    // check that the first character is a letter
    if (!((afterAt[0] >= 'a' && afterAt[0] <= 'z') || (afterAt[0] >= 'A' && afterAt[0] <= 'Z')))
        return false;

    // for every other character, check that it is a letter, a number, a special character, a -, or a dot, but no two consequtive dots
    for (let i = 1; i < afterAt.length; i++) {
        const char = afterAt[i];
        if (!((char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || special.includes(char) || char == "-" || char == "."))
            return false;
        if (char == "." && afterAt[i - 1] == ".")
            return false;
    }

    // check that the last character is a letter
    if (!((afterAt[afterAt.length - 1] >= 'a' && afterAt[afterAt.length - 1] <= 'z') || (afterAt[afterAt.length - 1] >= 'A' && afterAt[afterAt.length - 1] <= 'Z')))
        return false;

    // check that pre-last character is a letter
    if (!((afterAt[afterAt.length - 2] >= 'a' && afterAt[afterAt.length - 2] <= 'z') || (afterAt[afterAt.length - 2] >= 'A' && afterAt[afterAt.length - 2] <= 'Z')))
        return false;

    // check that there is a dot
    if (!afterAt.includes("."))
        return false;
    
    return true;
}

// on change of the email input, check if it is valid
// if not valid, set the custom validity message
// if valid, set the custom validity message to empty
email.addEventListener("input", function() {
    if (checkEmail(email.value)) {
        email.setCustomValidity("");
        emailValidity.innerHTML = "Meow!";
    } else {
        email.setCustomValidity("Email must be in the format: [letters, numbers or special characters]@[letters or -].[letters]");
        emailValidity.innerHTML = "Email must be in the format: [letters, numbers or special characters]@[letters or -].[letters]";
    }
});

// function to check that country is valid
// country must be at least 1 character, and contain only letters
function checkCountry(str) {
    let valid = true;

    if (country.value.length == 0) { // check that the length is correct
        return false;
    }

    for (let i = 0; i < country.value.length; i++) { // for every character
        const char = country.value[i];
        if ((char < 'A' || char > 'Z') && (char < 'a' || char > 'z') && char != ' ') { // check that it is a letter
            valid = false;
        }
    }

    return valid;
}

// on change of the country input, check if it is valid
// if not valid, set the custom validity message
// if valid, set the custom validity message to empty
country.addEventListener("input", function() {
    if (checkCountry(country.value)) {
        country.setCustomValidity("");
        countryValidity.innerHTML = "Beatiful!";
    } else {
        country.setCustomValidity("Country must contain only letters and spaces");
        countryValidity.innerHTML = "Country must contain only letters and spaces";
    }
});

// function to check that address is valid
// address must be at least 1 character, and contain only letters, numbers, spaces, commas, dots, dashes and apostrophes
// it must not start with a space
function checkAddress(str) {
    let valid = true;

    if (address.value.length == 0) { // check that the length is correct
        return true;
    }

    if (address.value[0] == " ") { // check that it does not start with a space
        return false;
    }

    for (let i = 0; i < address.value.length; i++) { // for every character
        const char = address.value[i];
        if (!((char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char == " " || char == "," || char == "." || char == "-" || char == "'")) { // check that it is a letter, a number, a space, a comma, a dot, a dash or an apostrophe
            valid = false;
        }
    }

    return valid;
}

// on change of the address input, check if it is valid
// if not valid, set the custom validity message
// if valid, set the custom validity message to empty
address.addEventListener("input", function() {
    if (checkAddress(address.value)) {
        address.setCustomValidity("");
        addressValidity.innerHTML = "Done!";
    } else {
        address.setCustomValidity("Address must contain only letters, numbers, spaces, commas, dots, dashes and apostrophes");
        addressValidity.innerHTML = "Address must contain only letters, numbers, spaces, commas, dots, dashes and apostrophes";
    }
});

// function to check that sex is valid 
// sex must be at least one character long
function checkSex(str) {
    return str.length > 0;
}

// on change
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
