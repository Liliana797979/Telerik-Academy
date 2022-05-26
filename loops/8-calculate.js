let input = [5, -4];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let x = Number(gets());
let fact = 1;
let count = 1;
let final = 0;

while (n > 0) {
    fact *= count;
    final += fact / Math.pow(x, count);
    count++;
    
    n--;
}
final += 1;
print(final.toFixed(5));