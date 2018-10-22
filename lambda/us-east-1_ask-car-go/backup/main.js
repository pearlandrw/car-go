var quote = require('./quote');
const http = require('http');
var concat = require('concat-stream');

var requestJson = quote.buildRequestJson();
console.log("requestJson:" + requestJson);

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
 const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.pipe(concat(function(body){
        var parsed = JSON.parse(body);
        console.log(parsed.term);
    }));
}); 
req.on('error', (error) => {
    console.error(error)
});

req.write(requestJson);
req.end();





