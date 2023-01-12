//alert('I am in !!!!!');

console.log('This is how you can write debug statements in browser !!!!')
console.log('Use Inspect to open developer tools in browser !!!')

console.log('JS is a case sensitive language !!!');
// Console.Log('JS is a case sensitive language !!!'); // OP: Errors out

// Variables

var sessionname = 'LWC Upskill'; // Dynamic typed language
var evennumber = 2;
var decimalNumber = 1.23;

console.log('Data Type of sessionname::' + typeof sessionname);
console.log('Data Type of evennumber::' + typeof evennumber);
console.log('Data Type of decimalNumber::' + typeof decimalNumber);

// In 2015 : ECAMA released lot of new JS Stds | ECMA2015 or ES6 Stds

let nameofthesession = 'LWC upskill and Modern JS';
console.log('Data Type of nameofthesession::' + typeof nameofthesession);

// Var : gets Global scope
// let : gets local scope
// Function to add 2 numbers
function add()
{
    

    if(true)
    {
        var op = 3 + 9; // global scope
        //let op = 3 + 9; // local scope

        console.log('OP is ' + op);
    }


    console.log('Sum is ' + op);    
}

add(); // call the function


// const

const user_name = 'sadmin';
const password = 'password123'; 

//password = 'winter'; // OP: Errors out as constant variable value cannot be changed
console.log('Value of password is ' + password);

let sessionTopic = 'Modern JS';
let sessionTrainner = 'Rajesh'
let particiapantsRole = 'Technical devs and leads'

let sessionDesc = 'The topic for today is ' + sessionTopic 
        + ' and the trainner is ' + sessionTrainner + 
        '. Participants are ' + particiapantsRole;

console.log(sessionDesc);

// `` ${}

let sessionDesc_usingStringInterpolation = `The topic for today is ${sessionTopic} 
and the trainner is ${sessionTrainner}. 
Participants are
 ${particiapantsRole}`;

console.log(sessionDesc_usingStringInterpolation);

// JS object
const movie = 
{
    movieName : 'Avatar 2',
    partName: 'The way of Water',
    imdbRating: '8/10'
}

const movieCard = `
<div>
    <h1>${movie.movieName}</h1>
    <h2>${movie.partName}</h2>
    ${movie.imdbRating}
</div>`;

console.log(movieCard);

const newdivTag = document.createElement('div');
newdivTag.innerHTML = movieCard;

document.body.innerHTML = movieCard;







