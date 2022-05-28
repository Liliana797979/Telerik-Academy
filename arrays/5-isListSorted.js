let input = [3, "1,2,3,4,5", "1,2,8,9,9", "1,2,2,3,2"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let boolean = true;
let prev = nul;

for (let i = 0; i < n; i++) {
    let arr = gets().split(",").map(Number);
    
    for (let j = 0; j < arr.length; j++) {
        if(prev === null) {
            prev = arr[j];
        }
        if (arr[j] >= prev) {
            boolean = true;
            prev = arr[j];
        } else {
            boolean = false;
            break;
        }
    }
    if (boolean) {
        print(boolean);
        prev = null;
    } else {
        print(boolean);
        prev = null;
    }
}