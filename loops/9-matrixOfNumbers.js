let input = [4];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let givenNum = Number(gets());
let line = "";

for (let i = 1; i <= givenNum; i++) {
    for (let j = 1; j <= givenNum; j++) {
        let sum = i + j - 1;
        line += sum + " ";  
    }
    print(line);
    line = "";
}
