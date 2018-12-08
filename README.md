A markdown parser, compiler, and viewer (via ["marked"]).
> Do you want to:
> - Get markdown files as HTML?
> - Or, Read markdown files in terminal?
<br>


## setup

1. Install [Node.js], if not installed.
2. Run `npm install -g extra-marked` in [console].
3. To install this as a package use `npm install extra-marked`.
<br>


## console

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

### reference

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
$MARKED_PEDANTIC     # enable conform to the original markdown.pl as much as possible. dont fix original markdown bugs or behavior. turns off and overrides gfm. (0)
$MARKED_SANITIZE     # enable sanitizing the HTML passed into markdownString with the sanitizer function (0)
$MARKED_SILENT       # enable silent parsing (0)
$MARKED_SMARTLISTS   # enable using smarter list behavior than those found in markdown.pl (0)
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


## package

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

### reference

```javascript
const marked = require('extra-marked');

googletts(output, text, options={})
// output:  output audio file
// text:    input text
// options: given below
// -> Promise <topic timetable>

// Default options:
options = {
  stdio: [0, 1, 2], // set child process stdio
  log: false,       // enable log
  retries: 3,       // set speech synthesis retries
  credentials: {
    keyFilename: '' // path to credentials
    // see other TTS client options below
  },
  acodec: 'copy',    // set audio acodec
  voice: {
    languageCode: 'en-US',   // set voice language code
    ssmlGender: 'NEUTRAL'    // set voice SSML gender
    name: 'en-US-Wavenet-D', // set voice name
  }
  quote: {
    breakTime: 250,           // set quoted text break time
    emphasisLevel: 'moderate' // set quoted text emphasis level
  },
  heading: {
    breakTime: 4000,         // set heading text break time
    breakDiff: 250,          // set heading text break difference
    emphasisLevel: 'strong', // set heading text emphasis level
  },
  ellipsis: {
    breakTime: 1500 // set ellipsis break time
  },
  dash: {
    breakTime: 500  // set dash break time
  },
  newline: {
    breakTime: 1000 // set newline break time
  },
  block: {
    length: 5000,  // set SSMLs block length
    separator: '.' // set SSMLs block separator
  }
}
```
<br>


## similar

Do you need anything similar?
- [extra-youtubeuploader] can upload videos with caption to YouTube.
- [extra-stillvideo] can generate video from audio and image.

Suggestions are welcome. Please [create an issue].
<br><br>


[![nodef](https://i.imgur.com/LPVfMny.jpg)](https://nodef.github.io)
> References: [SSML], [TTS voices], [TTS client docs].

["marked"]: https://www.npmjs.com/package/marked

[Node.js]: https://nodejs.org/en/download/
[console]: https://en.wikipedia.org/wiki/Shell_(computing)#Text_(CLI)_shells
[Enable API]: https://console.cloud.google.com/flows/enableapi?apiid=texttospeech.googleapis.com
[Setup authentication]: https://cloud.google.com/docs/authentication/getting-started

[account]: https://accounts.google.com/signup
[Google Cloud Platform]: https://console.developers.google.com/
[new project]: https://console.cloud.google.com/projectcreate
[Cloud Text-to-Speech API]: https://console.cloud.google.com/apis/library/texttospeech.googleapis.com
[credentials]: https://console.cloud.google.com/apis/credentials/wizard
[RapidEE]: https://www.rapidee.com/en/about

[extra-stillvideo]: https://www.npmjs.com/package/extra-stillvideo
[extra-youtubeuploader]: https://www.npmjs.com/package/extra-youtubeuploader
[create an issue]: https://github.com/nodef/extra-googletts/issues

[SSML]: https://developers.google.com/actions/reference/ssml
[TTS voices]: https://cloud.google.com/text-to-speech/docs/voices
[TTS client docs]: https://cloud.google.com/nodejs/docs/reference/text-to-speech/0.1.x/v1beta1.TextToSpeechClient
