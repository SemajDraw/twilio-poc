const details = require('../details/details');
const client = require('twilio')(details.accountSid, details.authToken);

module.exports = {
    getRickRolled: function (to) {
        return client.calls.create({
            url: 'https://demo.twilio.com/docs/voice.xml',
            to: to,
            from: details.twilioNumber
        })
    }
};

