const sum = (a,b ) => 
{
    let c = a + b;
    return c;
}

const multiply = (a,b ) => 
{
    let c = a * b;
    return c;
}

const division = (a,b ) => 
{
    let c = a / b;
    return c;
}

const difference = (a,b ) => 
{
    let c = a -  b;
    return c;
}

const randomNumber = () =>
{
    return Math.floor(Math.random() * 100);
}

function add(a=1, b=2) // default paramter value
{
    return a+b;
}

function summall(...input) // rest paramater
{
    let total = 0;
    for(let item of input)
    {
        total = total + item;
    }

    return total;
}



export {sum,multiply, division,difference, randomNumber,add,summall}