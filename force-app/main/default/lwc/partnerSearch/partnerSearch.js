import { LightningElement, wire} from 'lwc'; // Step 1: Declare that wire function will be used in the code

// Step 2: use @salesforce module to access apex method
import fetchAllPartnerType from '@salesforce/apex/partnerSearchController.getAllPartnerTypes'; 

export default class PartnerSearch extends LightningElement {


   // Data binding

   appdesc = 'Partner Management app helps Sales & Marketing Team to quickly find list of Channel partners having relationship with the organization. These partners have been vetted by Vendor relationship team. Sales & Marketing users can also use the app to share feedback about a partner and find other details like primary point of contact, location, Sale pipeline etc';
 
   
   value = 'inProgress';

   partnerTypes; // a property to hold all partner types from DB

   // property
   get options() {
      // array of objects 
      return [
           { label: 'Technology Partner', value: '0x1111' },
           { label: 'Marketing Partner', value: '0x112' },
           { label: 'Reseller', value: '0x113' },
           { label: 'Social Media Partner', value: '0x114' },
           { label: 'Legal Partner', value: '0x115' },
       ];
   }


   // Step 3: Use @wire method to make a call to the APEX method
   @wire(fetchAllPartnerType)
   handleOuput({data, error}) // data & error are system defined properties to hold data received from DB or error when APEX method is called
   {
      //Check if data is retrieved 
      if(data)
      {
        this.partnerTypes = data; // copy the data received from DB into a local property  
        console.log('this.partnerTypes ::' + JSON.stringify(this.partnerTypes));
      }
      else if(error)
      {
         console.log('Error');
      }
   }

   /* Syntax for reference
      @wire('name of the function ' , 'Input Parameters')
      property or function // OP 
   */
}