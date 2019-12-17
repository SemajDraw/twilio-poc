var express = require('express');
var router = express.Router();
const twilio = require('../twilio/voice');


router.get('/rick_rolled', function (request, response) {
    twilio.getRickRolled(request.body.to)
        .then((twilioResponse) => {
            console.log('Success: ', twilioResponse);
            response.send("Response: " + twilioResponse.body);
        })
        .catch((error) => {
            console.log(error);
            response.send("Error: " + error.message);
        });
});

module.exports = router;
