import { LightningElement, wire} from 'lwc'; // Step 1: Declare that wire function will be used in the code

// Step 2: use @salesforce module to access apex method
import fetchAllPartnerType from '@salesforce/apex/partnerSearchController.getAllPartnerTypes'; 


// Navigation Mix - Step 1
import { NavigationMixin } from 'lightning/navigation';

// Refs: Mixin in JS  

// Navigation Mix - Step 3
export default class PartnerSearch extends NavigationMixin(LightningElement) {

   // Data binding

   appdesc = 'Partner Management app helps Sales & Marketing Team to quickly find list of Channel partners having relationship with the organization. These partners have been vetted by Vendor relationship team. Sales & Marketing users can also use the app to share feedback about a partner and find other details like primary point of contact, location, Sale pipeline etc';
 
   
   value = 'inProgress';

   partnerTypes; // a property to hold all partner types from DB

   // property
   //get options() {
      // array of objects 
      /*return [
           { label: 'Technology Partner', value: '0x1111' },
           { label: 'Marketing Partner', value: '0x112' },
           { label: 'Reseller', value: '0x113' },
           { label: 'Social Media Partner', value: '0x114' },
           { label: 'Legal Partner', value: '0x115' },
       ];*/

     /*  return [
         {"value":"a065j000009ck5oAAA","label":"Marketing Partner"},
         {"value":"a065j000009ck5pAAA","label":"Resellers"},
         {"value":"a065j000009ck5qAAA","label":"Recruited Advocates"},
         {"value":"a065j000009ck5rAAA","label":"Affiliates"},
         {"value":"a065j000009ck5sAAA","label":"Social Media Channel Partner"},
         {"value":"a065j000009ck5tAAA","label":"Distributors"},
         {"value":"a065j000009ck5uAAA","label":"Client Advocates"},
         {"value":"a065j000009ck5vAAA","label":"Technology Partner"}
      ]
   }*/


   // Step 3: Use @wire method to make a call to the APEX method
   @wire(fetchAllPartnerType)
   handleOuput({data, error}) // data & error are system defined properties to hold data received from DB or error when APEX method is called
   {
      //Check if data is retrieved 
      if(data)
      {
        
         console.log('Original data from DB:: ' + JSON.stringify(data));

        // create an object to show as 1st iten
        this.partnerTypes = [ {'label': 'Select a partner Type', 'value':''}];
        
        // loop thru each record retrieved from DB and then change the key
        data.forEach(item => {

         // switch keys
         const partnerType = {};
         partnerType.label = item.Name;
         partnerType.value = item.Id;

         // add this temp object into main partnerTypes
         this.partnerTypes.push(partnerType);
         
        });
        
        
       //this.partnerTypes = data; // copy the data received from DB into a local property  
        console.log('this.partnerTypes - After::' + JSON.stringify(this.partnerTypes));
      
      }
      else if(error)
      {
         console.log('Error');
      }
   }

   navigateToPartnerTypeCreatePage()
   {
       // Navigation Mix - Step 2
      // call navigate fundtion by passing all input paramerts in JS object format

      
      // input paramaters
      const inputParams = {
         type: 'standard__objectPage',
         attributes: {
            actionName: "new",
            objectApiName: "Partner_Type__c"
         }
      };
      this[NavigationMixin.Navigate](inputParams);
   }

   navigateToAccountCreatePage()
   {
       // Navigation Mix - Step 2
      // call navigate fundtion by passing all input paramerts in JS object format

      
      // input paramaters
      const inputParams = {
         type: 'standard__objectPage',
         attributes: {
            actionName: "new",
            objectApiName: "Account"
         }
      };
      this[NavigationMixin.Navigate](inputParams);
   }

   navigateToContactCreatePage()
   {
       // Navigation Mix - Step 2
      // call navigate fundtion by passing all input paramerts in JS object format

      
      // input paramaters
      const inputParams = {
         type: 'standard__objectPage',
         attributes: {
            actionName: "new",
            objectApiName: "Contact"
         }
      };
      this[NavigationMixin.Navigate](inputParams);
   }


   handlePartnerTypeChange(event)
   {
      const partnerTypeId = event.detail.value;

      console.log('partnerTypeId - On change is ' + partnerTypeId);

      // Child to parent communication using custom events
      // Step 1: Create a custom event
      //Syntax: const partnerTypeCustomEvent = new CustomEvent("param1 > Name of the event)", "pass data in JS object format");
      const partnerTypeCustomEvent = new CustomEvent("selectedpartnertype", {detail: partnerTypeId});
      this.dispatchEvent(partnerTypeCustomEvent);
      
   }

   /* Syntax for reference
      @wire('name of the function ' , 'Input Parameters')
      property or function // OP 
   */
}