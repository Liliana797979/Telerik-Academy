let input = ["24 25 26"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(" ").map(Number);
let result = [];

arr.forEach((element) => {
    let cel = (element * 9) / 5 + 32;
    print(cel);
});