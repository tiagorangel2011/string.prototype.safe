<div align="center" text-align="center" style="text-align: center;">
<h1>string.prototype.safe</h1>
<p>Make a string safe!</p>
</div>

## First, what's this
This is a simple library for making a string that can't be XSSed.
Look at this example:
```js
// with a string without HTML
> "Here's a string without HTML injection".safe()
< "Here's a string without HTML injection"

// XSS/HTML injection
> "XSS goes here: <img src='' onerror='alert()'>".safe()
< "XSS goes here: &lt;img src='' onerror='alert()'&gt;"
```
And what do we need to use this?
```js
String.prototype.safe = function () {
    return this.split('').join('')
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
}
```

Or just use a function:
```js
function Safe(s) {
    return s.split('').join('')
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
}
```
Pretty simple script, right? I minified this code, check it [in the safe.min.js file](https://github.com/tiagorangel2011/string.prototype.safe/blob/main/safe.min.js)
Thanks for reading!
**PS**: Copyright goes to [@ihack2712](https://support.glitch.com/t/how-to-prevent-xss/30446/22?u=tiagorangel2011)
