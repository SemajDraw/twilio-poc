var express = require('express');
var router = express.Router();
const twilio = require('../twilio/messaging');

router.post('/sms', function(request, response) {
    twilio.sendSMS(request.body.to, request.body.message)
        .then((twilioResponse) => {
            console.log('Success: ', twilioResponse);
            response.send("Response: " + twilioResponse.body);
        })
        .catch((error) => {
            console.log(error);
            response.send("Error: " + error.message);
        });
});

router.post('/whatsapp_message', function(request, response) {
    twilio.sendWhatsAppMessage(request.body.to, request.body.message)
        .then((twilioResponse) => {
            console.log('Success: ', twilioResponse);
            response.send("Response: " + twilioResponse.body);
        })
        .catch((error) => {
            console.log(error);
            response.send("Error: " + error.message);
        });
});

router.post('/whatsapp_notification', function (request, response) {
    twilio.sendWhatsAppNotification(request.body.to, request.body.month, request.body.time, request.body.date)
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
