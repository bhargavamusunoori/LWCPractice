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
            
            throw new Exception(ex.getMessage());
        }
        
    }

    
}
