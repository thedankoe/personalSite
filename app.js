var express = require('express');
var path = require('path');
var app = express();
var dotenv = require('dotenv').config();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8081;

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// View engine setup
app.set('view engine', 'ejs');
// Static folder
app.use(express.static(__dirname + '/public'));

app.enable('verbose errors');


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
    from: `${req.body.name} <${req.body.email}>`,
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
      res.render('thank-you');
    }
  });
});

app.get('/blog', (req, res) => {
  res.render('blog');
});

app.get('/blog/5-web-design-trends-in-2018', (req, res) => {
  res.render('5-web-design-trends-in-2018');
});

// 404
app.get('/404', function(req, res, next){
  // trigger a 404 since no other middleware
  // will match /404 after this one, and we're not
  // responding here
  next();
});

app.use(function(req, res, next){
  res.status(404);

  res.format({
    html: function () {
      res.render('404', { url: req.url })
    },
    json: function () {
      res.json({ error: 'Not found' })
    },
    default: function () {
      res.type('txt').send('Not found')
    }
  })
});

app.listen(port, process.env.IP, function(){
   console.log("Server has started");
});

