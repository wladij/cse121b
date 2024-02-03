/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}


document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
var Subtract = function (number1, number2) {
    return number1 - number2;
}

var subNumbers = function () {
    
    let subtNumber1 = Number(document.querySelector('#subtract1').value);
    let subtNumber2 = Number(document.querySelector('#subtract2').value);

    
    document.querySelector('#difference').value = Subtract(subtNumber1, subtNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subNumbers);

/* Arrow Function - Multiply Numbers */
var Multiply = (number1, number2) => number1 * number2;


var multNumber = () => {
    
    let mulNumber1 = Number(document.querySelector('#factor1').value);
    let mulNumber2 = Number(document.querySelector('#factor2').value);

    
    document.querySelector('#product').value = Multiply(mulNumber1, mulNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multNumber);

/* Open Function Use - Divide Numbers */
var Divide = (number1, number2) => number1 / number2;


var divideNumber = () => {
    
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    
    document.querySelector('#quotient').value = Divide(divideNumber1, divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumber);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', function() {
  
  const subtotalInput = document.getElementById('subtotal');
  const subtotalValue = parseFloat(subtotalInput.value);

  
  const membershipCheckbox = document.getElementById('member');
  const applyDiscount = membershipCheckbox.checked;

  
  const discountMultiplier = applyDiscount ? 0.8 : 1;
  const totalAmount = subtotalValue * discountMultiplier;

  
  const totalSpan = document.getElementById('total');
  totalSpan.textContent = `$${totalAmount.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
const arrayElement = document.getElementById('array');
arrayElement.textContent = numbersArray.join(', ');
/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
const oddsElement = document.getElementById('odds');
oddsElement.textContent = oddNumbers.join(', ');
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML= numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
const numbersArray1 = numbersArray.map(number => number * 2);
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray1.reduce((sum, number) => sum + number);