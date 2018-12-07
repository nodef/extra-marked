const marked = require('marked');
const kleur = require('kleur');
const TerminalRenderer = require('./renderer');
const fs = require('fs');


// Get markdown view output.
function view(dat, o) {
  var clr = kleur.enabled;
  kleur.enabled = true;
  marked.setOptions({renderer: new TerminalRenderer(o)});
  var z = marked(dat).replace(/<br\s*\/?>/gi, '\n');
  kleur.enabled = clr;
  return z;
};

marked.TerminalRenderer = TerminalRenderer;
marked.view = view;
module.exports = marked;

// Command line interface.
function shell(a) {
  var dat = fs.readFileSync(a[2], 'utf8');
  console.log(view(dat));
};
if(require.main===module) shell(process.argv);
