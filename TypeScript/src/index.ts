class Test {
    fname:string;
    age:number;
    constructor(a:string,b:number) {
        this.fname = a
        this.age = b
    }
    re(){
        return `${this.fname} ${this.age}`
    }
}

const text = new Test("Kittipod",19)