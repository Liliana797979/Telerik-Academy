let input = ["3,-12,0,0,13,5,1,0,-2"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(",").map(Number);

let minus = "";
let zeros = "";
let positives = "";
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        minus += arr[i] + ",";
    } else if (arr[i] === 0) {
        zeros += arr[i] + ",";
    } else {
        positives += arr[i] + ",";
    }
}
let result = `${minus}${zeros}${positives}`;
print(result.substring(0, result.length - 1));