const inputName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputAge = document.getElementById('age');
const form = document.querySelector('form');

const person = {
    firstName: inputName.value,
    lastName: inputLastName.value,
    age: inputAge.value,
}

jsonPerson = JSON.stringify(person);

form.setAttribute("data-person", jsonPerson)