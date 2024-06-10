/* https://support.glitch.com/t/how-to-prevent-xss/30446/22?u=tiagorangel2011 */

String.prototype.safe = function () {
    if (typeof this == "number") {return this}
    return this.split('').join('')
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
}
