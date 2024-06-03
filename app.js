const passwordBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "@*&^%$#()-_<>";

const allChars = upperCase + lowerCase + numbers + specialChar;

let btn = document.querySelector("button");

btn.addEventListener ("click",function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
});

//---------------------ANOTHER WAY -------------------------------------------------

// let btn = document.querySelector("button");
// btn.onclick = createPassword;

function copyPassword (){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

    let cpy = document.querySelector("img");
    cpy.onclick = copyPassword;