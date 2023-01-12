// have members or properties 
// have class member function
/* Base syntax 
class MyClass
{
    // class methods
    constructor()
    {

    }

    method1()
    method2()
    ...
}
*/
//"use strict"; // ES6



class User
{
    constructor(name)
    {
        this.uname = name; // assigning or setting a value to the local property
    }

    //get and set for properties

    get uname()
    {
        return this._uname;
    }

    set uname(value)
    {
        if(value.length < 4)
        {
            alert(`Name entered " ${value} " is too short !!! must be greater than 4 characters`);
            return;
        }

        this._uname = value;
    }

    greetings(age)
    {
        console.log('Hi ' + this.uname + ' !!!') // access the local member variable or property and show it on the screen

        this.age = age;
        console.log('Age is ' + age);

        //alert('hi !!!! ')
    }

    printAge()
    {
        console.log('PrintAge | Age is ' + this.age);
    }
}

// usage

let u1 = new User('Sasi');
u1.greetings(24);
u1.printAge();

let u2 = new User('John');
// OPEN : WHY IS IT NOT THROWING VALIDATION ERROR???


var a = 1;
console.log('Value of a is ' + a);


