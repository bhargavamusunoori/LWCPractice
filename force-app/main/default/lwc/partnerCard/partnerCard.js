import { LightningElement, api, wire } from 'lwc';



export default class PartnerCard extends LightningElement {

    // Exposing a public property 
    @api partnerProfile;

    userImg;
    partnerTheme;
    partnerTitleTheme; 

    connectedCallback() {
        this.getUserImage(this.partnerProfile.Partner_Primary_POC__r.Salutation);
        this.getPartnerTheme(this.partnerProfile.Partner_Type_Lookup__r.Name);
    }

    getUserImage(title) {
        const randomId = Math.floor(Math.random() * 100);

        switch (title) {
            case 'Mr.':
                this.userImg = `https://randomuser.me/api/portraits/med/men/${randomId}.jpg`;
                break;
            case 'Ms.':
                this.userImg = `https://randomuser.me/api/portraits/med/women/${randomId}.jpg`
                break;
            default:
                this.userImg = 'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg'
                break;
        }
    }

    getPartnerTheme(PartnerType) {
        switch (PartnerType) {
            case "Technology Partner":
                this.partnerTheme = 'slds-theme_success pointer';
                this.partnerTitleTheme = 'slds-align_absolute-center title'

                break;
            case "Marketing Partner":
                this.partnerTheme = 'slds-theme_info pointer';
                this.partnerTitleTheme = 'titleStyleForMarketingPartner slds-align_absolute-center title'
                break;
            case "Affiliates":
                this.partnerTheme = 'slds-theme_warning pointer';
                this.partnerTitleTheme = 'slds-align_absolute-center title'

                break;
            case "Client Advocates":
                this.partnerTheme = 'slds-theme_error pointer';
                this.partnerTitleTheme = 'slds-align_absolute-center title'

                break;
            default:
                this.partnerTheme = 'slds-theme_offline pointer';
                this.partnerTitleTheme = 'slds-align_absolute-center title'

                break;
        }
    }







}