public with sharing class partnerSearchController {
    

    @AuraEnabled(cacheable=true) // Add this annotation if you would like to expose a method to use in LWC    
    public static List<Partner_Type__c> getAllPartnerTypes() {

        try {
            return [SELECT ID, Name FROM Partner_Type__c WITH SECURITY_ENFORCED];    
        } catch (Exception ex) {

            throw new AuraHandledException(ex.getMessage());
            
        }
        
        
    }

    public static List<Account> getAllAccounts() {
        try {
            return [SELECT ID, Name FROM Account];
        } catch (Exception ex) {
            
            throw new AuraHandledException(ex.getMessage());
        }
        
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getPartners(string strPartnerTypeId){
        try {

            if(String.isEmpty(strPartnerTypeId))
            {
                // return all channels partners from the system
                return [SELECT Id,Name, Partner_Type_Lookup__c,Partner_Type_Lookup__r.Name, Partner_Active_Pipeline_Value__c, 
                Partner_Budget__c, Partner_Contract_End_Date__c, Partner_Contract_Start_Date__c, Partner_Geo_Location__Latitude__s,
                Partner_Geo_Location__Longitude__s, Partner_Geo_Location__c, Partner_Primary_POC__c, Partner_Primary_POC__r.Name,
                Partner_Primary_POC__r.Salutation, Partner_Status__c, Partner_Total_Sales_Revenue__c, Partner_Training_Completed__c, 
                Partner_WebSite__c  FROM Account WHERE Partner_Status__c IN('Active', 'Inactive','Pending')];
            }

            else {
                // return only matching channel partners from the system
                return [SELECT Id,Name, Partner_Type_Lookup__c,Partner_Type_Lookup__r.Name, Partner_Active_Pipeline_Value__c, 
                Partner_Budget__c, Partner_Contract_End_Date__c, Partner_Contract_Start_Date__c, Partner_Geo_Location__Latitude__s,
                Partner_Geo_Location__Longitude__s, Partner_Geo_Location__c, Partner_Primary_POC__c, Partner_Primary_POC__r.Name,
                Partner_Primary_POC__r.Salutation, Partner_Status__c, Partner_Total_Sales_Revenue__c, Partner_Training_Completed__c, 
                Partner_WebSite__c  FROM Account WHERE 
                Partner_Status__c IN('Active', 'Inactive','Pending') AND Partner_Type_Lookup__c =: strPartnerTypeId];
            }

            
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}
