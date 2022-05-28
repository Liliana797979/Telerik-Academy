let input = ["2, 3, 1", "5, 2, 3"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = gets().split(",");
let b = gets().split(",");
let result = "";

for (let i = 0; i < a.length; i++) {
    result += `${a[i]}, ${b[i]},`;
}
print(result.substring(0, result.length - 1));