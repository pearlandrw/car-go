var quote = require('./quote');

var http = require('http');



function postCodeCheck(callback) {
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

    const req = http.request(options, (res) => {
        let body = '';
        console.log('Status:', res.statusCode);
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Successfully processed HTTPS response');
            // If we know it's JSON, parse it
            body = JSON.parse(body);
            console.log("OP:"+body.term);
            callback(null, body);
        });
    });
    req.on('error', callback);
    req.write(requestJson);
    req.end();
}

postCodeCheck(function (pCLatLng) {
    console.log(pCLatLng);
});