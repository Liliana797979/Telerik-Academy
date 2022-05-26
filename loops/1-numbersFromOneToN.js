let input = [5];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets());
for (let i = 0; i <= number; i++) {
    print(i);
}