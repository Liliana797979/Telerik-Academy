let input = ["0,1,0,3,12"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(",").map(Number);
let zeros = [];
let positives = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        positives.push(arr[i]);
    } else {
        zeros.push(arr[i]);
    } 
}

print(positives.concat(zeros));