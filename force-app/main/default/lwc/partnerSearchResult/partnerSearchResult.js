import { LightningElement } from 'lwc';


export default class PartnerSearchResult extends LightningElement {



  ChannelPartnersList =  [

    {Id:1,partnerUserImg : 'https://randomuser.me/api/portraits/med/women/1.jpg',partnerUserCompany : 'Oracle',partnerUserName : 'Amy Anderson',partnerType : 'Technology Partner'}
    ,{Id:2,partnerUserImg : 'https://randomuser.me/api/portraits/med/men/1.jpg',partnerUserCompany : 'Microsoft',partnerUserName : 'Samuel Jackson',partnerType : 'Technology Partner'}
    ,{Id:3,partnerUserImg : 'https://randomuser.me/api/portraits/med/women/10.jpg',partnerUserCompany : 'Salesforce',partnerUserName : 'Kate Williamson',partnerType : 'Social Media Partner'}
    ,{Id:4,partnerUserImg : 'https://randomuser.me/api/portraits/med/men/10.jpg',partnerUserCompany : '6sense',partnerUserName : 'John Doe',partnerType : 'Technology Partner'}
    ,{Id:5,partnerUserImg : 'https://randomuser.me/api/portraits/med/men/11.jpg',partnerUserCompany : 'mailchimp',partnerUserName : 'Jack Sparrow',partnerType : 'Marketing Partner'}

  ];

  // property to check if data is available 
  get isPartnersAvailable()
  {
    if(this.ChannelPartnersList !=null && this.ChannelPartnersList.length > 0)
    {
        return true;
    }
    return false;
  }
   

}