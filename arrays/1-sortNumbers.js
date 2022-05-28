let input = ["2, 3, 1, 5, 6"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = gets().split(",").map(Number);
let result = [];
let final = "";

for (let i = 0; i < a.length; i++) {
    result.push(a[i]);
}
let sorted = result.sort(function(a, b) {
    return b - a;
});

sorted.forEach((token) => {
    final += ` ${token}`;
});

print(a);