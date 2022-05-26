let input = [3, 2, 5, 1];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets());
let prev = null;
let result = "";

for (let i = 0; i < number; i++) {
    let current = Number(gets());
    
    if (prev === null) {
        prev = current;
        result = `${current}`;
    } else if (current > prev) {
        result += `<${current}`;
        prev = current;
    } else if (current < prev) {
        result += `>${current}`;
        prev = current;
    } else if (current === prev) {
        result += `=${current}`;
        prev = current;
    }
}
print(result);