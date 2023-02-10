import { LightningElement, wire } from 'lwc';

// step 1: Import all the fields needed to show on the screen
import PARTNER_NAME from '@salesforce/schema/Account.Name';
import PARTNER_CON_STARTDATE from '@salesforce/schema/Account.Partner_Contract_Start_Date__c';
import PARTNER_CON_ENDDATE from '@salesforce/schema/Account.Partner_Contract_End_Date__c';
import PARTNER_POC_NAME from '@salesforce/schema/Account.Partner_Primary_POC__c';

import partnerbudget from '@salesforce/schema/Account.Partner_Budget__c';
import partnerTrainned from '@salesforce/schema/Account.Number_of_trained_Partner_contacts__c';
import partneractivepipeline from '@salesforce/schema/Account.Partner_Active_Pipeline_Value__c';
import PartnerTotalSales from '@salesforce/schema/Account.Partner_Total_Sales_Revenue__c';
import PARTNER_Lat from '@salesforce/schema/Account.Partner_Geo_Location__Latitude__s';
import PARTNER_Lon from '@salesforce/schema/Account.Partner_Geo_Location__Longitude__s';





export default class PartnerDetail extends LightningElement {

    objectApiName = 'Account';
    recordId = '0015j00000wgxP7AAI';

    // Step 2: Have a property to hold field value
    partner_Name = PARTNER_NAME;
    partner_ContractStartDate =  PARTNER_CON_STARTDATE;
    partner_ContractEndDate =  PARTNER_CON_ENDDATE;
    partner_POC = PARTNER_POC_NAME;
    partner_budget = partnerbudget;
    partner_Trainned = partnerTrainned;
    partner_activepipeline = partneractivepipeline;
    partner_totalSales= PartnerTotalSales;
    partner_lat = PARTNER_Lat;
    partner_long = PARTNER_Lon;




}