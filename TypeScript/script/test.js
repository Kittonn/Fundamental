export class Test {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    re() {
        return `${this.fname} ${this.lname} ${this.age}`;
    }
}
