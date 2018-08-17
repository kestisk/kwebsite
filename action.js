var email = require('emailjs/email');
var User = require('../model/user');
var config = require('../config/database');
var jwt = require('jwt-simple');
var functions = {
    sendmail: function (req, res) {
        debugger;
        var server = email.server.connect({
            user: "kestisk@outlook.com",
            password: "132636sk",
            host: "<smtp server>",
            ssl: true
        });

        // send the message and get a callback with an error or details of the message that was sent
        server.send({
            text: "You have signed up",
            from: "sender email",
            to: req.body.name,
            subject: "Welcome to my app",

        }, function (err, message) {
            if (err)
                console.log(err);
            else
                res.json({ success: true, msg: 'sent' });
        });

    }
}
module.exports = functions;