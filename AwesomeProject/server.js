var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
const nodemailer = require('nodemailer');
var app = express();
const router = require('express').Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use('/api/v1/',require('./router'));

var server = http.createServer(app);


app.post('/api/v1/RaiseComplaint', function (req, res) {
  console.log('--------------req reach to server---------');
  console.log(req.body);
  // res.send('response froms server')
  nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth:{
          user:'spsingh559@gmail.com',
          pass:'Shyam123@sush'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.from, // sender address
        to: req.body.to, // list of receivers
        subject: 'Public Complaint', // Subject line
        html: req.body.complaintText // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
})
app.get('/api/v1/RaiseComplaint', function (req, res) {
  console.log('--------------req reach to server---------');
  res.send('get response froms server')
})

//Listening to port 8081

server.listen(3000, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }
    console.log("Server started at 3000");
});

