/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Joe Candelario';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/me.png';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */
let favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Tacos", "Ice Cream"];
foodElement.innerHTML = favoriteFoods.join(", ");

let otherFood = "Rice";
favoriteFoods.push(otherFood);
foodElement.innerHTML += `<br> ${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br> ${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br> ${favoriteFoods}`;



