let input = ["256"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = gets().split("");
let b = a.reverse();
let c = b.join("");

print(c);