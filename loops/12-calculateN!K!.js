let input = [8, 3];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let k = Number(gets());

let factN = 0;
let factK = 0;

for (let i = 1; i <= n; i++) {
    if (i == 1) {
        factN = 1;
        factK = 1;
    }
    factN *= i;
    if (i <= k) {
        factK *= i;
    }
}

print(factN / factK);