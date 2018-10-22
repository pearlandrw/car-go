

class QuoteResponseParseClient {
  static parseQuote(responseString) {
    var response = JSON.parse(responseString);
    var speechText = "The best deal is a  monthly Payment of "+response.monthlyPayment+" dollars for a term of "+response.term+" months"; 
    return speechText;
  }
}

module.exports = QuoteResponseParseClient;
