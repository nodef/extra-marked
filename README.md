A markdown parser, compiler, and viewer (via ["marked"]).
> Do you want to:
> - Get markdown files as HTML?
> - Or, Read markdown files in terminal?
<br>


## Setup

1. Install [Node.js], if not installed.
2. Run `npm install -g extra-marked` in [console].
3. To install this as a package use `npm install extra-marked`.
<br>


## Console

```bash
marked README.md
# view README.md

cat README.md | marked
# view README.md

marked README.md > README.html
# get README.md as HTML

marked -i README.md --sanitize -o README.html
# ignore HTML in markdown

marked -i README.md --no-gfm -o README.html
# disable GFM in markdown

marked -i README.md -v | more
# view README.md with more
# (when piping view needs enabling)

marked -i README.md --view_heading red.bold
# view README.md with red and bold headings
# (view is enabled by default when not piping)
```

### Reference

```bash
marked [options] <input>
# input: input markdown file

# Options:
# --help:         show this help
# -o, --output:   set output file
# -i, --input:    set input markdown file
# -s, --string:   set input markdown string
# -t, --tokens:   enable tokens (0)
# -v, --view:     view as markdown (0)
# --baseurl:      set prefix URL for any relative link
# --breaks:       enable adding <br> on a single line break. requires GFM enabled (0)
# --gfm:          enable use of GitHub Flavored Markdown specification (1)
# --headerids:    enable including id attribute when emitting headings (1)
# --headerprefix: set string to prefix the id attribute when emitting headings
# --langprefix:   set string to prefix the className in a <code> block. useful for syntax highlighting (language-)
# --mangle:       enable escaping autolinked email address with HTML character references (1)
# --pedantic:     enable conform to the original markdown.pl as much as possible. dont fix original markdown bugs or behavior. turns off and overrides gfm. (0)
# --sanitize:     enable sanitizing the HTML passed into markdownString with the sanitizer function (0)
# --silent:       enable silent parsing (0)
# --smartlists:   enable using smarter list behavior than those found in markdown.pl (0)
# --smartypants:  enable using "smart" typographic punctuation for things like quotes and dashes (0)
# --tables:       enable using GFM tables extension, when gfm is also enabled (1)
# --xhtml:        enable emitting self-closing HTML tags for void elements (<br/>, <img/>, etc.) with a "/" as required by XHTML (0)
# --no-breaks:     disable breaks
# --no-gfm:        disable GFM
# --no-headerids:  disable header IDs
# --no-mangle:     disable mangle
# --no-pedantic:   disable pednatic
# --no-sanitize:   disable sanitize
# --no-silent:     disable silent
# --no-smartlists: disable smart lists
# --no-tables:     disable tables
# --no-xhtml:      disable XHTML
# --view_code:         set code color (yellow)
# --view_blockquote:   set blockquote color (gray.italic)
# --view_html:         set html color (gray)
# --view_heading:      set heading color (green.bold)
# --view_firstheading: set first heading color (magenta.underline.bold)
# --view_hr:           set hr color (reset)
# --view_listitem:     set list item color (reset)
# --view_table:        set table color (reset)
# --view_paragraph:    set paragraph color (reset)
# --view_strong:       set strong color (bold)
# --view_em:           set em color (italic)
# --view_codespan:     set code span color (yellow)
# --view_del:          set del color (dim.gray.strikethrough)
# --view_link:         set link color (blue)
# --view_href:         set href color (blur.underline)
# --view_text:         set text color
# --view_unescape:     enable unescape (1)
# --view_emoji:        enable emoji (1)
# --view_width:        set width (80)
# --view_showsectionprefix: enable show section prefix (1)
# --view_showhref:          enable show href (0)
# --view_reflowtext:        enable reflow text (0)
# --view_tab:               set tab (4)
# --no-view_unescape: disbale unescape
# --no-view_emoji:    disable emoji
# --no-view_showsectionprefix: disable show section prefix
# --no-view_showhref:          disable show href
# --no-view_reflowtext:        disable reflow text

# Environment variables:
$MARKED_OUTPUT   # set output file
$MARKED_INPUT    # set input markdown file
$MARKED_STRING   # set input markdown string
$MARKED_TOKENS   # enable tokens (0)
$MARKED_VIEW     # view as markdown (0)
$MARKED_BASEURL      # set prefix URL for any relative link
$MARKED_BREAKS       # enable adding <br> on a single line break. requires GFM enabled (0)
$MARKED_GFM          # enable use of GitHub Flavored Markdown specification (1)
$MARKED_HEADERIDS    # enable including id attribute when emitting headings (1)
$MARKED_HEADERPREFIX # set string to prefix the id attribute when emitting headings
$MARKED_LANGPREFIX   # set string to prefix the className in a <code> block. useful for syntax highlighting (language-)
$MARKED_MANGLE       # enable escaping autolinked email address with HTML character references (1)
$MARKED_PEDANTIC     # enable conform to the original markdown.pl as much as possible. dont fix original markdown bugs or behavior. turns off and overrides gfm (0)
$MARKED_SANITIZE     # enable sanitizing the HTML passed into markdownString with the sanitizer function (0)
$MARKED_SILENT       # enable silent parsing (0)
$MARKED_SMARTLISTS   # enable using smarter list behavior than those found in markdown.pl (0)
$MARKED_SMARTYPANTS  # enable using "smart" typographic punctuation for things like quotes and dashes (0)
$MARKED_TABLES       # enable using GFM tables extension, when gfm is also enabled (1)
$MARKED_XHTML        # enable emitting self-closing HTML tags for void elements (<br/>, <img/>, etc.) with a "/" as required by XHTML (0)
$MARKED_VIEW_CODE         # set code color (yellow)
$MARKED_VIEW_BLOCKQUOTE   # set blockquote color (gray.italic)
$MARKED_VIEW_HTML         # set html color (gray)
$MARKED_VIEW_HEADING      # set heading color (green.bold)
$MARKED_VIEW_FIRSTHEADING # set first heading color (magenta.underline.bold)
$MARKED_VIEW_HR           # set hr color (reset)
$MARKED_VIEW_LISTITEM     # set list item color (reset)
$MARKED_VIEW_TABLE        # set table color (reset)
$MARKED_VIEW_PARAGRAPH    # set paragraph color (reset)
$MARKED_VIEW_STRONG       # set strong color (bold)
$MARKED_VIEW_EM           # set em color (italic)
$MARKED_VIEW_CODESPAN     # set code span color (yellow)
$MARKED_VIEW_DEL          # set del color (dim.gray.strikethrough)
$MARKED_VIEW_LINK         # set link color (blue)
$MARKED_VIEW_HREF         # set href color (blur.underline)
$MARKED_VIEW_TEXT         # set text color
$MARKED_VIEW_UNESCAPE     # enable unescape (1)
$MARKED_VIEW_EMOJI        # enable emoji (1)
$MARKED_VIEW_WIDTH        # set width (80)
$MARKED_VIEW_SHOWSECTIONPREFIX # enable show section prefix (1)
$MARKED_VIEW_SHOWHREF          # enable show href (0)
$MARKED_VIEW_REFLOWTEXT        # enable reflow text (0)
$MARKED_VIEW_TAB               # set tab (4)
```
<br>


## Package

```javascript
const marked = require('extra-marked');

marked('I am using __markdown__.');
// <p>I am using <strong>markdown</strong>.</p>\n

marked.setOptions({headerPrefix: 'topic-'});
marked('# this is a header');
// <h1 id="topic-this-is-a-header">this is a header</h1>\n

marked.view('get **markdown** view');
// \u001b[0mget \u001b[1mmarkdown\u001b[22m view\u001b[0m\n\n

const kleur = require('kleur');
marked.view('get **markdown** view', {strong: kleur.red().bold});
// \u001b[0mget \u001b[1m\u001b[31mmarkdown\u001b[39m\u001b[22m view\u001b[0m\n\n
```

### Reference

```javascript
const marked = require('extra-marked');

marked(string)
// string: input markdown string
// -> <html>

marked.setOptions(options)

// Default options:
options = {
  baseUrl: null,            // set prefix URL for any relative link
  breaks: false,            // enable adding <br> on a single line break. requires GFM enabled
  gfm: true,                // enable use of GitHub Flavored Markdown specification
  headerIds: true,          // enable including id attribute when emitting headings
  headerPrefix: '',         // set string to prefix the id attribute when emitting headings
  highlight: null,          // set function to highlight code blocks
  langPrefix: 'language-',  // set string to prefix the className in a <code> block. useful for syntax highlighting
  mangle: true,             // enable escaping autolinked email address with HTML character references
  pedantic: false,          // enable conform to the original markdown.pl as much as possible. dont fix original markdown bugs or behavior. turns off and overrides gfm
  renderer: new Renderer(), // set object containing functions to render tokens to HTML
  sanitize: false,          // enable sanitizing the HTML passed into markdownString with the sanitizer function
  silent: false,            // enable silent parsing
  smartLists: false,        // enable using smarter list behavior than those found in markdown.pl
  smartypants: false,       // enable using "smart" typographic punctuation for things like quotes and dashes
  tables: true,             // enable using GFM tables extension, when gfm is also enabled
  xhtml: false              // enable emitting self-closing HTML tags for void elements (<br/>, <img/>, etc.) with a "/" as required by XHTML
}


const kleur = require('kleur');
marked.view(string, options)
// string: input markdown string
// -> <markdown with ansi color codes>

// Default options:
options = {
  code: kleur.yellow,              // set code color
  blockquote: kleur.gray().italic, // set blockquote color
  html: kleur.gray,                // set html color
  heading: kleur.green().bold,     // set heading color
  firstHeading: kleur.magenta().underline().bold, // set first heading color
  hr: kleur.reset,                 // set hr color
  listitem: kleur.reset,           // set list item color
  list: /* list function */,       // set list function
  table: kleur.reset,              // set table color
  paragraph: kleur.reset,          // set paragraph color
  strong: kleur.bold,              // set strong color
  em: kleur.italic,                // set em color
  codespan: kleur.yellow,          // set code span color
  del: kleur.dim().gray().strikethrough,          // set del color
  link: kleur.blue,                // set link color
  href: kleur.blue().underline,    // set href color
  text: a => a,                    // set text color
  unescape: true,                  // enable unescape
  emoji: true,                     // enable emoji
  width: 80,                       // set width
  showSectionPrefix: true,         // enable show section prefix
  showHref: false,                 // enable show href
  reflowText: false,               // enable reflow text
  tab: 4,                          // set tab
  tableOptions: {}                 // set table options
};
```
<br>


## Similar

Do you need anything similar?
- [parse5] can parse and serialize HTML.
- [esprima] can parse an JavaScript program.

Suggestions are welcome. Please [create an issue].
<br><br>


[![nodef](https://i.imgur.com/T4EGQLy.jpg)](https://nodef.github.io)
> References: [marked-terminal], [markcat], [kleur].

["marked"]: https://www.npmjs.com/package/marked

[Node.js]: https://nodejs.org/en/download/
[console]: https://en.wikipedia.org/wiki/Shell_(computing)#Text_(CLI)_shells

[parse5]: https://www.npmjs.com/package/parse5
[esprima]: https://www.npmjs.com/package/esprima
[create an issue]: https://github.com/nodef/extra-marked/issues

[marked-terminal]: https://www.npmjs.com/package/marked-terminal
[markcat]: https://www.npmjs.com/package/markcat
[kleur]: https://www.npmjs.com/package/kleur
