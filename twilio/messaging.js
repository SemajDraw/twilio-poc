const details = require('../details/details');
const client = require('twilio')(details.accountSid, details.authToken);

module.exports = {
    sendSMS: function(to, message) {
        console.log(`Account SID: ${details.accountSid}`);
        return client.messages.create({
            body: message,
            to: to,
            from: details.twilioNumber
        });
    },

    sendWhatsAppMessage: function (to, message) {
        return client.messages.create({
            body: message,
            to: 'whatsapp:' + to,
            from: 'whatsapp:' + details.whatsAppNumber
        });
    },

    sendWhatsAppNotification: function (to, month, time, date) {
        return client.messages.create({
            body: `Your call with Genesis is coming up on ${month} ${date} at ${time}`,
            to: 'whatsapp:' + to,
            from: 'whatsapp:' + details.whatsAppNumber
        });
    }
};
