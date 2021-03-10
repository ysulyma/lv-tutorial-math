# Getting Started

To start server:

```
npm install
node server.js
```

Then go to http://localhost:8080 in your browser.

**Note** You must access the page over HTTPS in order to record audio. Here is a tutorial on how to get HTTPS working in a development environment: https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/

**Note** `npm` may give you a scary warning about a security vulnerability in three.js. You can ignore this; *do not upgrade three.js* or the implicit graphing example won't work.

# Development

To compile TSX to JS:

`webpack --watch`

This will produce a lot of TypeScript error messages; don't worry, you can ignore these.

To compile Stylus to CSS:
```
stylus \
  --compress \
  --include-css \
  --include ./node_modules \
  --out . \
  --watch styl/style.styl
```

Thus, you will want **three** terminal windows open when developing: one to run the server, one to compile TSX, and one to compile stylus.

# MathJax

MathJax requires an absolute path for its configuration file. When you upload your ractive to a server, you will need to replace `/mathjax` with the path to the MathJax config file on your server.

```html
<script defer id="js-async-mathjax" src="//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=TeX-AMS-MML_HTMLorMML,/mathjax/config.js"></script>
```

```js
MathJax.Ajax.config.path["Extra"] = "/mathjax";
```