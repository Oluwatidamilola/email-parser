var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
dotenv.config()

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


var router = express.Router();

router.post('/', function(req, res, next) {
    res.status(200).json(parseHeader(req.headers));
});

app.use('/', router);

module.exports = app;

function parseHeader(headers) {
    return {
        "Message-ID": headers["message-id"],
        "From": headers["from"],
        "To": headers["to"],
        "Subject": headers["subject"],
        "Date": headers["date"],
    }
}

