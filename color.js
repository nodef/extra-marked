const kleur = require('kleur');


// Get same color.
function identity(val) {
  return val;
};

// Get color function from text.
function color(txt) {
  var z = identity;
  for(var p of txt.split(/\W+/)) {
    var y = z===identity? kleur[p]:z()[p];
    z = y? y:z;
  }
  return z;
};
module.exports = color;
