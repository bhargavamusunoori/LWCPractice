
const userArray = [    
    { uname: 'John Doe',company: 'Salesforce',profileImage: 'https://randomuser.me/api/portraits/med/men/1.jpg'}, 
    { uname: 'John Wick',company: 'Google',profileImage: 'https://randomuser.me/api/portraits/med/men/10.jpg'},
    { uname: 'Kate Williamson',company: 'Adobe',profileImage: 'https://randomuser.me/api/portraits/med/women/1.jpg'},
    { uname: 'Messi',company: 'Microsoft',profileImage: 'https://randomuser.me/api/portraits/med/men/11.jpg'},
    { uname: 'Angelina',company: 'Mailchimp',profileImage: 'https://randomuser.me/api/portraits/med/women/13.jpg'},
    { uname: 'Johny Dep',company: '6sense',profileImage: 'https://randomuser.me/api/portraits/med/men/13.jpg'},

];

function createUserCard()
{

    // access the template using id
    const templateTag = document.getElementById('user-card'); 

    
    userArray.forEach((item) =>
    {

    // copy of the content
    const templateContent = templateTag.content.cloneNode(true);

    // modify the content per our needs
    
    // access img tag inside template using class
    const imgTag = templateContent.querySelector('.userImg') ;
    // access h4 tag inside template using class
    const h4Tag = templateContent.querySelector('.uname') ;
    
    imgTag.src = item.profileImage;


    h4Tag.innerHTML = item.uname;

    // find the user card array list &
    // show the image
    
    const ulTag = document.getElementById('user-card-array'); 
    ulTag.append(templateContent);

    });


    
    
    

    


}