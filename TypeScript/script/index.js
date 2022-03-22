"use strict";
class Test {
    constructor(a, b) {
        this.fname = a;
        this.age = b;
    }
    re() {
        return `${this.fname} ${this.age}`;
    }
}
const text = new Test("Kittipod", 19);
console.log(text.re());