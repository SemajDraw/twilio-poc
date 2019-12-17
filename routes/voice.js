var express = require('express');
var router = express.Router();
const twilio = require('../twilio/messaging');


router.get('/me_voice', function (request, response) {
    response.send("Howyah");
});

module.exports = router;
