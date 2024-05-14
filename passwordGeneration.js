/*2. Password Generation:
 
This function helps users create secure passwords based on their names. 
It takes the user's first and last names and combines the first 3 characters of the first name
 with the last 3 characters of the last name, then adds "@2024" to the end. For example,
  if the user's name is "John Doe", the generated password would be "JohDoe@2024".*/



//Predefined userName
let firstName = "Sally"
let lastName = "Kageni"
let password



function passGeneration(password) {
    passFirstName = firstName.slice(0, 3)
    passLastName = lastName.slice(3,)
    password = passFirstName + passLastName + "@2024"
    return password

}


console.log(passGeneration(password))