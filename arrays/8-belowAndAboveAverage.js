let input = ["0, 1, -1"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split().map(Number);
let sum = 0;
let above = "";
let below = "";

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
}

let avg = Math.round((sum / arr.length) * 100) / 100;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < avg) {
        below += arr[i] + ",";
    } else if (arr[i] > avg) {
        above += arr[i] + ",";
    }  
}

print("avg: " + avg.toFixed(2));
print("below: " + below.substring(0, below.length - 1));
print("above: " + above.substring(0, above.length - 1));
