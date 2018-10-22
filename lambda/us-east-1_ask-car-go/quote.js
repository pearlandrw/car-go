module.exports = {
    getQuote: function (make, model, year) {


    },
    printQuoteDetails: function () {

    },
    buildRequestJson: function () {
        return "{"+this.buildCustomer()+","+this.buildVehicle()+","+this.buildTransactiontype()+","+this.buildTerm()+"}";
    },
    buildVehicle: function () {
        return '"vehicle":{"vin": "KM8JN12D79U175519", "msrp": "null","year": null,"make": null,"model": null,"style": null,"salesClass": null}';  
    },
    buildCustomer: function () {
        return '"customer": {"firstName": "chandra","lastName": "reddy", "phoneNumber": "2225556666","address":{ "addressLine1": "36812", "addressLine2": "jamestown","city": null,"state": null, "zipCode": "48335"}}';
    },
    buildTransactiontype: function(){
        return '"transactionType": "LEASE"';
    },
    buildTerm: function(){
        return '"term": 12';
    }
};