import { LightningElement } from 'lwc';

export default class MasterContainner extends LightningElement {

    selectedPartnerTypeId = '';

    partnerTypeHandler(event)
    {
        // access selecred partner Type Id being dispatched by the child component
        this.selectedPartnerTypeId = event.detail; 

        console.log('master containner received data from child component (partner search)::' + this.selectedPartnerTypeId);
    }
   
}