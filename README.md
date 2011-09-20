# AssetRace

### Fork ChangeLog (Pewpewarrows)

The purpose of this fork is to drastically expand the test base and convert the
project over into using Jekyll for quicker iterations.

### Testing asset load times one technique at a time.

Fork and add yours.

### The Rules:

You must serve all of the CSS and all of the JavaScript in `static`. Run 
`finish.js` after all of the assets have loaded. The elapsed time will be displayed.

Please note that any arguments related to script loading solutions not playing
nicely with inline script blocks on the page is a non-issue. The only
non-external script tags on the page should be variables passed from your
back-end, if any, and are only accessed after document.ready. For any code that
you would otherwise need to only execute on specific pages, look no further than:

http://www.viget.com/inspire/extending-paul-irishs-comprehensive-dom-ready-execution/

### Tests:

10 runs of each of these, first with no cache, then using the browser's cache
All of these files should have "Cache-Control: public, max-age=31536000" on them

These tests need to be run separately in all major browsers, including
previous, current, and next versions, unless otherwise specified:

* Chrome
* Firefox
* IE (6+)
* Safari
* Opera

Any sort of compression via gzip or deflate is ignored for now.

"Bundled" means having an intelligent split of concatenated files, such as
a lib.js and an app.js, for finer grained cachability.

Also note that all of the tests involving jQuery being loaded from CDN are open
to scrutiny, since they are at the mercy of Google's CDN speeds.

Control group:

* Plain files, each separately, in the head
* Plain files, each separately, at the end
* Plain files, concatenated, in the head
* Plain files, concatenated, at the end
* Plain files, bundled, in the head
* Plain files, bundled, at the end

Basic improvements:

* Minified files, each separately, in the head
* Minified files, each separately, at the end
* Minified files, concatenated, in the head
* Minified files, concatenated, at the end
* Minified files, bundled, in the head
* Minified files, bundled, at the end

CDN Usage:

* Minified files, each separately, in the head, jQuery from CDN
* Minified files, each separately, at the end, jQuery from CDN
* Minified files, concatenated, in the head, jQuery from CDN
* Minified files, concatenated, at the end, jQuery from CDN
* Minified files, bundled, in the head, jQuery from CDN
* Minified files, bundled, at the end, jQuery from CDN

Using script defer:

* Minified files, each separately, in the head, defer attribute
* Minified files, each separately, at the end, defer attribute
* Minified files, concatenated, in the head, defer attribute
* Minified files, concatenated, at the end, defer attribute
* Minified files, bundled, in the head, defer attribute
* Minified files, bundled, at the end, defer attribute
* Minified files, each separately, in the head, defer attribute, jQuery from CDN
* Minified files, each separately, at the end, defer attribute, jQuery from CDN
* Minified files, concatenated, in the head, defer attribute, jQuery from CDN
* Minified files, concatenated, at the end, defer attribute, jQuery from CDN
* Minified files, bundled, in the head, defer attribute, jQuery from CDN
* Minified files, bundled, at the end, defer attribute, jQuery from CDN

(normal script tag injection cannot guarantee order of execution, many tests skipped)

Script tag insertion:

* Minified files, concatenated, in the head, with injected script tags
* Minified files, concatenated, at the end, with injected script tags

(Defer doesn't exist for injected script tag, skipping)

Script tag insertion using async:

* Minified files, concatenated, in the head, with injected script tags using async
* Minified files, concatenated, at the end, with injected script tags using async

jQuery script loading

* Minified files, each separately, in the head, using jQuery getScript
* Minified files, each separately, at the end, using jQuery getScript
* Minified files, concatenated, in the head, using jQuery getScript
* Minified files, concatenated, at the end, using jQuery getScript
* Minified files, bundled, in the head, using jQuery getScript
* Minified files, bundled, at the end, using jQuery getScript
* Minified files, each separately, in the head, using jQuery getScript, jQuery from CDN
* Minified files, each separately, at the end, using jQuery getScript, jQuery from CDN
* Minified files, concatenated, in the head, using jQuery getScript, jQuery from CDN
* Minified files, concatenated, at the end, using jQuery getScript, jQuery from CDN
* Minified files, bundled, in the head, using jQuery getScript, jQuery from CDN
* Minified files, bundled, at the end, using jQuery getScript, jQuery from CDN

YepNope script loading (from Modernizr)

LABjs script loading

RequireJS script loading

ControlJS script loading

HeadJS script loading

