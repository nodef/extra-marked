#!/usr/bin/env node
const getStdin = require('get-stdin');
const boolean = require('boolean');
const marked = require('marked');
const kleur = require('kleur');
const tempy = require('tempy');
const cp = require('child_process');
const fs = require('fs');
const View = require('./view');


// Global variables.
const E = process.env;
const OPTIONS = {
  baseUrl: E['MARKED_BASEURL']||null,
  breaks: boolean(E['MARKED_BREAKS']||'0'),
  gfm: boolean(E['MARKED_GFM']||'1'),
  headerIds: boolean(E['MARKED_HEADERIDS']||'1'),
  headerPrefix: E['MARKED_HEADERPREFIX']||'',
  langPrefix: E['MARKED_LANGPREFIX']||'language-',
  mangle: boolean(E['MARKED_MANGLE']||'1'),
  pedantic: boolean(E['MARKED_PEDANTIC']||'0'),
  sanitize: boolean(E['MARKED_SANITIZE']||'0'),
  silent: boolean(E['MARKED_SILENT']||'0'),
  smartLists: boolean(E['MARKED_SMARTLISTS']||'0'),
  smartypants: boolean(E['MARKED_SMARTYPANTS']||'0'),
  tables: boolean(E['MARKED_TABLES']||'1'),
  xhtml: boolean(E['MARKED_XHTML']||'0')
};
const STDIO = [0, 1, 2];


// Get object key.
function objectKey(obj, key) {
  var re = new RegExp(`^${key}$`, 'i');
  for(var k in obj)
    if(re.test(k)) return k;
  return null;
};

// Get markdown view output.
function view(dat, o) {
  var clr = kleur.enabled;
  kleur.enabled = true;
  marked.setOptions({renderer: new View(o)});
  var z = marked(dat).replace(/<br\s*\/?>/gi, '\n');
  kleur.enabled = clr;
  return z;
};


// Get options from arguments.
function options(o, k, a, i) {
  o.view = o.view||{};
  o.files = o.files||[];
  if(a[i]==='-h' || a[i]==='--help') o.help = true;
  else if(a[i]==='-o' || a[i]==='--output') o.output = a[++i];
  else if(a[i]==='-i' || a[i]==='--input') o.input = a[++i];
  else if(a[i]==='-s' || a[i]==='--string') o.string = a[++i];
  else if(a[i]==='-t' || a[i]==='--tokens') o.tokens = true;
  else if(a[i]==='-v' || a[i]==='--view') o.views = true;
  else if(k.startsWith('--no-view_')) return View.options(o.view, k.replace('-view_', ''), a, i);
  else if(k.startsWith('--view_')) return View.options(o.view, k.replace('view_', ''), a, i);
  else if(k.startsWith('--')) {
    var no = k.startsWith('--no-');
    var k = k.substring(no? 5:2).replace(/\W+/g, '');
    k = objectKey(OPTIONS, k);
    if(k==null) throw new Error('unknown option '+k);
    if(no) { o[k] = false; return i+1; }
    var v = OPTIONS[k];
    if(typeof v==='boolean') o[k] = true;
    else if(typeof v==='number') o[k] = parseInt(a[++i], 10);
    else o[k] = a[++i];
  }
  else o.files.push(a[i]);
  return i+1;
};

marked.View = View;
marked.view = view;
marked.options = options;
module.exports = marked;

// Command line interface.
async function shell(a) {
  var o = {};
  for(var i=2, I=a.length; i<I;)
    i = options(o, a[i], a, i);
  if(o.help) {}
  var inp = o.string;
  if(!inp && o.input) inp = fs.readFileSync(o.input, 'utf8');
  if(!inp && o.files.length>0) inp = fs.readFileSync(o.files.pop(), 'utf8');
  if(!inp) inp = await getStdin();
  marked.setOptions(o);
  var out = o.views? view(inp, o.view):marked(inp);
  if(o.output) return fs.writeFileSync(o.output, out);
  if(!process.stdout.isTTY) console.log(out);
  var tmp = tempy.file({extension: 'txt'});
  fs.writeFileSync(tmp, out);
  cp.execSync(`cat ${tmp} | less -r`, {stdio: STDIO});
  fs.unlinkSync(tmp);
};

// Error logged command line interface.
async function shellResilient(a) {
  try { await shell(a); }
  catch(e) { console.error('error:', e.message); }
};
if(require.main===module) shellResilient(process.argv);
