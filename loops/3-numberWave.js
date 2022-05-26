let input = [6];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets());
for (let i = 1; i <= number; i++) {
    print(i);
}
for (let j = number - 1; j > 0; j--) {
    print(j);
}