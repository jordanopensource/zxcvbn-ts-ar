'use strict';

var commonWords = require('./commonWords.json.js');
var firstnames = require('./firstnames.json.js');
var lastnames = require('./lastnames.json.js');
var wikipedia = require('./wikipedia.json.js');
var translations = require('./translations.js');

// This file is auto generated by data-scripts/_helpers/runtime.ts
const dictionary = {
  commonWords,
  firstnames,
  lastnames,
  wikipedia
};

exports.translations = translations;
exports.dictionary = dictionary;
//# sourceMappingURL=index.js.map
