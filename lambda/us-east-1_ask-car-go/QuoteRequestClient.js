const http = require('http');
const quote = require('./quote');
const QuoteResponseParseClient = require('./QuoteResponseParseClient');

var requestJson = quote.buildRequestJson();
const options = {
    hostname: 'ec2-18-222-165-190.us-east-2.compute.amazonaws.com',
    port: 8080,
    path: '/quote',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': requestJson.length
    }
};

class QuoteRequestClient {
  constructor(quoteResponseParseClient) {
    this.quoteResponseParseClient = quoteResponseParseClient || QuoteResponseParseClient;
  }

  getQuote() {
    return new Promise((resolve, reject) => {
      const quoteRequest = http.request(options, (response) => {
        const chunks = [];
        response.on('data', (chunk) => {
          chunks.push(chunk);
        });
        response.on('end', () => {
          const responseString = chunks.join('');
          resolve(this.quoteResponseParseClient.parseQuote(responseString));
        });
      });
      quoteRequest.on('error', (err) => {
        reject(err);
      });
      quoteRequest.write(requestJson);
      quoteRequest.end();
    });
  }
}
module.exports = QuoteRequestClient;
