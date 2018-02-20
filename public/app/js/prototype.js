Number.prototype.padLeft = function (n,str) {
    return (this < 0 ? '-' : '') +
        Array(n-String(Math.abs(this)).length+1)
            .join(str||'0') +
        (Math.abs(this));
};

Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this;
};