const boolean = require('boolean');
const cp = require('child_process');
const color = require('./color');
const marked = require('./');


// Global variables.
const E = process.env;
const STDIO = [0, 1, 2];


// Get object key.
function objectKey(obj, key) {
  var re = new RegExp(`^${key}$`, 'i');
  for(var k in obj)
    if(re.test(k)) return k;
  return null;
};

if(require.main===module) bin(process.argv);
