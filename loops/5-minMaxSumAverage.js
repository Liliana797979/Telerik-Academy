let input = [2, -1, 4];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets());
let numbers = [];
let sum = 0;

for (let i = 0; i < a; i++) {
    let b = Number(gets());
    sum += b;
    numbers.push(b);
}
let average = sum / a;
let withTwoDecimals = average.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

print(`min = ${Math.min(...numbers)}`);
print(`max = ${Math.max(...numbers)}`);
print(`sum = ${sum}`);
print(`average = ${with2Decimals}`);