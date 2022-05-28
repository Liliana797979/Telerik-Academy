let input = ["1,2,2,2,2,18,3,12"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(",");
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
        result += arr[i] + ",";
    }
}
print(result.substring(0, length - 1));