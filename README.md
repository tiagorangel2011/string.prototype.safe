<div align="center" text-align="center" style="text-align: center;">
<h1>string.prototype.safe</h1>
<p>Make a string safe!</p>
</div>

## First, what's this
This is a simple library for making a string that can't be XSSed.
Look at this example:
```js
// with a good string
> "Here's some good string".safe()
< "Here's some good string"

// not-so-good one
> "Some bad <img src='' onerror='alert()'> thing".safe()
< "Some bad &lt;img src='' onerror='alert()'&gt; thing"
```
And what do we use to do this?
````js
String.prototype.safe = function () {
	return this.split('').join('')
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;")
}
```
Thanks for reading!
