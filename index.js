var express = require("express");
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080, () => {
 console.log("Server running on port 8080");
});

app.get("/departures", (req, res, next) => {
  const createClient = require('hafas-client')
  const vbbProfile = require('hafas-client/p/insa')
  const client = createClient(vbbProfile, 'my-awesome-program')
  client.departures(req.query.stopID, {duration: req.query.duration}).then(function(stop){res.json(stop);}).catch(console.error)
});

app.get("/health", (req, res, next) => {
  res.send( "This is an insufficient health probe." );
});

app.get("/", (req, res, next) => {
  res.send( "Hello caller! You found a REST API Endpoint to query all departures for the PVGS with the help of the hafas-client. Just take a look at https://github.com/HannesHil/PVGSRestAPI. \n see ya" );
});

