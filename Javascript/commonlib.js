function getRandomImageUrlForMen(imgNumber)
{
    const imgurl =  `https://randomuser.me/api/portraits/med/men/${imgNumber}.jpg`
    return imgurl;
}

function getRandomImageUrlForWomen(imgNumber)
{
    const imgurl = `https://randomuser.me/api/portraits/med/women/${imgNumber}.jpg`
    return imgurl;
}

const login_url = 'https://login.salesforce.com'

class participant
{
    constructor(participantName, skillset) {
        
        //code
        this.participantName = participantName;
        this.skillset = skillset;
    }

    showParticipantDetail()
    {
        console.log(`Hi there !!! participant ${this.participantName} has joined the call having skillset ${this.skillset}` );
    }


}


// using export to make functions / variables/ classes etc 
// accessible in other js files

export {getRandomImageUrlForMen, getRandomImageUrlForWomen, login_url, participant}