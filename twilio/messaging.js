const accountSid = 'ACfeee533d7b888cc9805a8138a85e2b2d';
const authToken = 'e152854ce12ca503f3652a0a8f61001e';
const client = require('twilio')(accountSid, authToken);
const accountNumber = '+12017345677';
const whatsAppNumber = '+14155238886';

module.exports = {
    sendSMS: function(to, message) {
        return client.messages.create({
            body: message,
            to: to,
            from: accountNumber
        });
    },

    sendWhatsAppMessage: function (to, message) {
        return client.messages.create({
            body: message,
            to: 'whatsapp:' + to,
            from: 'whatsapp:' + whatsAppNumber
        });
    },

    sendWhatsAppNotification: function (to, month, time, date) {
        return client.messages.create({
            body: `Your call with Genesis is coming up on ${month} ${date} at ${time}`,
            to: 'whatsapp:' + to,
            from: 'whatsapp:' + whatsAppNumber
        });
    }
};
