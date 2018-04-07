var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();

const PORT = parseInt(process.env.PORT) || 3000;
const HOST = parseInt(process.env.HOST) || 'localhost';

var app = express();

app.use(express.static(__dirname + '/../public'));

app.listen(PORT, function() {
  console.log(`listening on port: ${HOST}:${PORT}!`);
});

