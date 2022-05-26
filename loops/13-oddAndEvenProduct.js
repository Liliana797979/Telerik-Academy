let input = ["2 1 1 6 3"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets().split(" ");
let odd = 1;
let even = 1;

for (let i = 0; i < n.length; i++) {
    if (i % 2 === 0) {
        even *= Number(n[i]); 
    } else {
        odd += Number(n[i]);
    } 
}
if (even == odd) {
    print("yes");
} else {
    print("no");
}