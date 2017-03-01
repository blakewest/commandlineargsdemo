'use strict';
var commandLineArgs = require('command-line-args');
var optionDefinitions = [
  { name: 'withHelper', alias: 'h', type: Boolean },
  { name: 'src', type: String, multiple: true, defaultOption: true },
  { name: 'timeout', alias: 't', type: Number }
];

var options = commandLineArgs(optionDefinitions);
var coolHelperFunction = require('./scriptB.js').coolHelperFunction;

if (options.withHelper) {
  console.log("It worked!");
  coolHelperFunction(options);
}
else {
  console.log("Didn't use helper");
}
