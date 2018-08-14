'use strict';

var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');
var PrettyError = require('pretty-error');

var prettyError = new PrettyError();
prettyError.skipNodeFiles();
prettyError.skipPackage('express');

var asserter = require('./asserter');

var app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/api/load', function (req, res) {
  res.sendFile(path.join(__dirname, 'items.json'));
});

app.post('/api/save', function (req, res) {
  asserter(req.body);
  res.status(200).send(req.body);
});

app.use(function (err, req, res, next) {
  console.error(prettyError.render(err));
  res.status(500).send('Request failed. Fix the error.');
});

module.exports = app;
