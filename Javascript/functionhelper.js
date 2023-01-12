function SayHi() // Legacy 
{
    return 'Hello there !!!!';
}


const output = SayHi(); // call the function and store the value in a variable
console.log(output); // print the output 

// nameless function
const Sayhi_nameless = function () {
    return 'Nameless Function - Hello there !!!!';
}

const OPMsg = Sayhi_nameless();
console.log(OPMsg);

console.log(Sayhi_nameless);

// Use new syntax and pass a function as a paramter to another function

function mainfunction(language, greeting_eng, greetings_german, greetings_french) {
    switch (language) {
        case 'English':
            greeting_eng();
            break;
        case 'German':
            greetings_german();
            break;
        case 'French':
            greetings_french();
            break;

        default:
            break;
    }
    //sayhi();
}

const greetings = function () // nameless function
{
    console.log('Hi there !!! - Learning something new');
    console.log('Passing a function as paramter to another function !!!!..here is the example')
}

const greetings_german = function () {
    console.log('Guten Morgen!');
}

const greetings_french = function () {
    console.log('Bon matin!!');
}


// pass function as a parameter
console.log('greetings function code::' + mainfunction);
mainfunction(greetings);





function sum(a, b) {
    const c = a + b;
    return c;
}

const sum_output = sum(1, 3);
const sum_output_1 = sum(2, 3);


// Arrow function

const sum_arrow = (a,b) => {
    const c = a + b;
    return c;
}

const output_sum = sum_arrow(1,9); // call arrow function
console.log(`output_sum:: ${output_sum}`);



