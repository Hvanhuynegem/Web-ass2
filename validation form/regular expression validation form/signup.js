const form = document.querySelector("#signup-form");

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const name = document.querySelector("#name");

const zip = document.querySelector("#ZIP");
const email = document.querySelector("#email");

const country = document.querySelector("#country");
const sex = document.querySelector("#sex");
const language = document.querySelector("#language");


const username_pattern = new RegExp("([A-Z].{3,10}[^a-zA-Z])");
const password_pattern = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^0-9a-zA-Z]).{12,}");
const name_pattern = new RegExp("[a-zA-Z]+");

const zip_pattern = new RegExp("[0-9]{4}[a-zA-Z]{2}");
const email_pattern = new RegExp("[a-z0-9!#$%&'*+\-=?^_`{|}~](\.?[a-z0-9!#$%&'*+\-=?^_`{|}~])*@[a-z0-9.\-]+\.[a-z]{2,}");

const country_pattern = new RegExp(".+");
const sex_pattern = new RegExp(".+");
const language_pattern = new RegExp(".+");




form.addEventListener('submit', function (x) {
    // prevent the form from submitting
    x.preventDefault();

});

const isRequired = (value) => {value === '' ? false : true};

const isValidUsername = (username) => {
    const username_pattern = new RegExp("([A-Z].{3,10}[^a-zA-Z])");
    return username_pattern.test(username);
};

const isValidPassword = (password) => {
    const password_pattern = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^0-9a-zA-Z]).{12,}");
    return password_pattern.test(password);
};

const isValidName = (name) => {
    const name_pattern = new RegExp("[a-zA-Z]+");
    return name_pattern.test(name);
};

const isValidZip = (zip) => {
    const zip_pattern = new RegExp("[0-9]{4}[a-zA-Z]{2}");
    return zip_pattern.test(zip);
};

const isValidEmail = (email) => {
    const email_pattern = new RegExp("[a-z0-9!#$%&'*+\-=?^_`{|}~](\.?[a-z0-9!#$%&'*+\-=?^_`{|}~])*@[a-z0-9.\-]+\.[a-z]{2,}");
    return email_pattern.test(email);
};

const isValidCountry = (country) => {
    const country_pattern = new RegExp(".+");
    return country_pattern.test(country);
};

const isValidSex = (sex) => {
    const sex_pattern = new RegExp(".+");
    return sex_pattern.test(sex);
};

const isValidLanguage = (language) => {
    const language_pattern = new RegExp(".+");
    return language_pattern.test(language);
};


const usernameCheck = () => {
    let pass = false;

    const usernameValue = username.value.trim();
    if (!isRequired(usernameValue)){
        showError(username, 'Username must be filled in.');
    } else if (!isValidUsername(usernameValue)){
        showError(username, 'must be of length 5 to 12, must start with a capital letter and end with a number or special character');
    }
    else {
        showSuccess(username);
        pass = true;
    }
    return pass;
};

const passwordCheck = () => {
    let pass = false;

    const passwordValue = password.value.trim();
    if (!isRequired(passwordValue)){
        showError(password, 'Password must be filled in.');
    } else if (!isValidPassword(passwordValue)){
        showError(password, 'must be of length 12, must contain at least 1 number, 1 capital letter, 1 special character');
    }
    else {
        showSuccess(password);
        pass = true;
    }
    return pass;
};

const nameCheck = () => {
    let pass = false;

    const nameValue = name.value.trim();
    if (!isRequired(nameValue)){
        showError(name, 'Name must be filled in.');
    } else if (!isValidName(nameValue)){
        showError(name, 'must contain only letters');
    }
    else {
        showSuccess(name);
        pass = true;
    }
    return pass;
};

const zipCheck = () => {
    let pass = false;

    const zipValue = zip.value.trim();
    if (!isRequired(zipValue)){
        showError(zip, 'ZIP must be filled in.');
    } else if (!isValidZip(zipValue)){
        showError(zip, 'Must contain 4 numbers, followed by two letters!');
    }
    else {
        showSuccess(zip);
        pass = true;
    }
    return pass;
};

const emailCheck = () => {
    let pass = false;

    const emailValue = email.value.trim();
    if (!isRequired(emailValue)){
        showError(email, 'Email must be filled in.');
    } else if (!isValidEmail(emailValue)){
        showError(email, 'Must be a valid email address!');
    }
    else {
        showSuccess(email);
        pass = true;
    }
    return pass;
};

const countryCheck = () => {
    let pass = false;

    const countryValue = country.value.trim();
    if (!isRequired(countryValue)){
        showError(country, 'Country must be filled in.');
    } else if (!isValidCountry(countryValue)){
        showError(country, 'Must be a valid country!');
    }
    else {
        showSuccess(country);
        pass = true;
    }
    return pass;
};

const sexCheck = () => {
    let pass = false;

    const sexValue = sex.value.trim();
    if (!isRequired(sexValue)){
        showError(sex, 'Sex must be filled in.');
    } else if (!isValidSex(sexValue)){
        showError(sex, 'must be Male, Female, or Other');
    } else {
        showSuccess(sex);
        pass = true;
    }
    return pass;
};

const languageCheck = () => {
    let pass = false;

    const languageValue = language.value.trim();
    if (!isRequired(languageValue)){
        showError(language, 'Language must be filled in.');
    } else if (!isValidLanguage(languageValue)){
        showError(language, 'must be a valid language');
    } else {
        showSuccess(language);
        pass = true;
    }
    return pass;
};


const showError = (input, message) => {
    
    const inputElement = input.parentElement;

    inputElement.classList.remove('success');
    inputElement.classList.add('error');

    const error = inputElement.querySelector('small');
    error.textContent = message;

};



