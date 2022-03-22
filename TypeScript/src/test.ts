import { HasFormatter } from "./Interfaces/hasFormatter";

export class Test implements HasFormatter {
  constructor(
    readonly fname: string,
    private lname: string,
    public age: number
  ) {}
  re() {
    return `${this.fname} ${this.lname} ${this.age}`;
  }
}
