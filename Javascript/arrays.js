const weekdays = ['Sunday', 'Monday', 'Tuesday',4,5.5,false];
console.log(`Partial Weekdays - ${weekdays}`); 

// Supports mixed data types

// Object
const userOne = {
    uname: 'John Doe',
    company: 'Salesforce',
    profileImage: 'https://randomuser.me/api/portraits/med/men/1.jpg'
}

console.log(userOne.uname);
console.log(userOne.company);

// array of objects

const userArray = [    
    { uname: 'John Doe',company: 'Salesforce',profileImage: 'https://randomuser.me/api/portraits/med/men/1.jpg'}, 
    { uname: 'John Wick',company: 'Google',profileImage: 'https://randomuser.me/api/portraits/med/men/10.jpg'},
    { uname: 'Kate Williamson',company: 'Adobe',profileImage: 'https://randomuser.me/api/portraits/med/women/1.jpg'},
    { uname: 'Messi',company: 'Microsoft',profileImage: 'https://randomuser.me/api/portraits/med/men/11.jpg'},
    { uname: 'Angelina',company: 'Mailchimp',profileImage: 'https://randomuser.me/api/portraits/med/women/13.jpg'},
];
console.log('User Image Array ::' + userArray);

// Convert object to string
const newUser = {
    uname: 'Johnny Dep',
    company: '6Sense',
    profileImage: 'https://randomuser.me/api/portraits/med/men/51.jpg'
} 

console.log('newUser::' + newUser); // data in JS object form
console.log('newUser::' + JSON.stringify(newUser)); // Convert obj into string

console.log('Length of the array is ' + userArray.length);

// add item into the array
userArray.push(newUser);
console.log('New Length of the array is ' + userArray.length);

// for loop to run thru the array and access data
/*for(let item of userArray)
{
    console.log('User Name | Company :' + item.uname + ' - ' + item.company);
    
}*/

// Option 2: Using for each and call back function

userArray.forEach(item => console.log('User Name | Company :' + item.uname + ' - ' + item.company));


userArray.forEach((item) => {
    if(item.uname == 'John Wick')
    {
        console.log('Release date for John Wick 4 is March 2023 !!!');
    }
});

//document.body.innerHTML = '<div>hi</div';

// OPEN ITEMS
/*

1. Adding new user object to existing array of users
2. Loop thru array of user objects and get image card printed on the screen

*/