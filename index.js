var express = require("express");
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(80, () => {
 console.log("Server running on port 80");
});

app.get("/departures", (req, res, next) => {
  const createClient = require('hafas-client')
  const vbbProfile = require('hafas-client/p/insa')
  const client = createClient(vbbProfile, 'my-awesome-program')
  client.departures(req.query.stopID, {duration: req.query.duration}).then(function(stop){res.json(stop);}).catch(console.error)
});

app.get("/", (req, res, next) => {
  res.send( "Hello caller!" );
});

