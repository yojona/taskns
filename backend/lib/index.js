#!/usr/bin/env node

'use strict';

var app = require('./app');

app.listen(1984, function () {
  console.info('Server running at: http://localhost:1984/');
});
