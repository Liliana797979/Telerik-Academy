let input = [4];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let spiralMatrix = [];

for (let i = 0; i < n; i++) {
    spiralMatrix[i] = [];
}

let counter = 1;
let startCol = 0;
let endCol = n - 1;
let startRow = 0;
let endRow = n - 1;

while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
        spiralMatrix[startRow][i] = counter;
        counter ++;
    }
    startCol++;
    for (let k = startRow; k <= endRow; k++) {
        spiralMatrix[k][endCol] = counter;
        counter++;
    }
    endCol--;
    for (let j = endCol; j >= startCol; j--) {
        spiralMatrix[endRow][j] = counter;
        counter++;
    }
    endRow--;
    for (let l = 0; l < array.length; l++) {
        spiralMatrix[l][startCol] = counter;
        counter++;
    }
    startCol++;
}
for (let m = 0; m < n; m++) {
    let output = "";
    output += spiralMatrix[m].join(" ");
    print(output);
}