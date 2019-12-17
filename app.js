const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const messagingRouter = require('./routes/messaging');
const voiceRouter = require('./routes/voice');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/messaging', messagingRouter);
app.use('/voice', voiceRouter);

app.listen(3001);
module.exports = app;
