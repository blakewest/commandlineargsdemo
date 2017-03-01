'use strict';
var commandLineArgs = require('command-line-args');
var optionDefinitions = [
  { name: 'force', alias: 'v', type: Boolean },
  { name: 'dryrun', type: String, multiple: true, defaultOption: true },
  { name: 'timeout', alias: 't', type: Number }
];

var options = commandLineArgs(optionDefinitions);

console.log('Options are...', options);

modules.export = {
  coolHelperFunction: function(params) {console.log(params);},
};
