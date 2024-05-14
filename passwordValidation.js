/*1. Password Validation:
 
Imagine a program where users create accounts. You want to make sure their passwords are strong and not easily guessed.
 This function checks if a password follows these guidelines:
 
It cannot be blank (empty).
It cannot contain repeated characters in a row (like "1111" or "aaaaa" or "Jjjj").
Optionally, you can add a list of common words that users shouldn't use as passwords (like "password" or "123456").*/


let password = "4rdhjbge7"

function passwordValidation(password) {
    if (password.length === 0) {
        console.log("Invalid Password. password is blank")
    } else if (password.length < 8) {
        console.log("Invalid Password. password too short")
    }
    else if (password == "password" || password == "12345678") {
        console.log("Invalid Password. password too easy")
    } else {
        console.log("Password is valid")
    }
    return password
}
console.log(passwordValidation(password))
