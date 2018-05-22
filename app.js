const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 8081;

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// View engine setup
app.set('view engine', 'ejs');
// Static folder
app.use(express.static(__dirname + '/public'));

// MAIN ROUTE
app.get('/', (req, res) => {
	res.render('index');
});

app.post('/', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Info On</h3>
    <ul>
      <li>Website creation: ${req.body.website}</li>
      <li>Marketing package: ${req.body.marketing}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
      host: '127.0.0.1',
      port: 1025,
      secure: false,
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Site Inquiry" <contact@thedankoe.com>', // sender address
      to: 'contact@thedankoe.com', // list of receivers
      subject: 'New Inquiry', // Subject line
      text: output, // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    
      if (error) {
          return console.log(error);
      } else {
        console.log(req.body);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.redirect('/#contact');
      }

  });
});

app.get('/blog', (req, res) => {
  res.render('blog');
});

app.get('/blog/5-web-design-trends-in-2018', (req, res) => {
  res.render('5-web-design-trends-in-2018');
});

app.listen(port, process.env.IP, function(){
   console.log("Server has started");
});

