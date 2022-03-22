import { Test } from "./test";

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const text = new Test("Kittipod", "Lambangchang", 19);

const me: isPerson = {
  name: "Kitton",
  age: 17,
  speak(text: string) {
    console.log(text);
  },
  spend(amonut: number) {
    return amonut;
  },
};

console.log(me);
