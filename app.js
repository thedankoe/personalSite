const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8081;

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
    <h3>Info/Pricing On</h3>
    <ul>
      <li>Website creation: ${req.body.website}</li>
      <li>Graphic design: ${req.body.design}</li>
      <li>Marketing package: ${req.body.marketing}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  var api_key = process.env.API_KEY;
  var domain = 'thedankoe.com';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  
  var data = {
    from: `Mailgun <${req.body.email}>`,
    to: 'thedankoe@gmail.com',
    subject: 'Site Inquiry',
    text: 'Site Inquiry',
    html: output
  };
  
  mailgun.messages().send(data, function (error, body) {
    if(error) {
      console.log(error);
    } else {
      console.log(body);
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

