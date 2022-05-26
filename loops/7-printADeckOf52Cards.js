let input = [14];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sign = gets();
let count = 0;
let n = 1;

switch (sign) {
    case '2':
        count = 2;
        break;
    case '3':
        count = 3;
        break;
    case '4':
        count = 4;
        break;
    case '5':
        count = 5;
        break;
    case '6':
        count = 6;
        break;
    case '7':
        count = 7;
        break;
    case '8':
        count = 8;
        break;
    case '9':
        count = 9;
        break;
    case '10':
        count = 10;
        break;
    case 'J':
        count = 11;
        break;
    case 'Q':
        count = 12;
        break;
    case 'K':
        count = 13;
        break;
    case 'A':
        count = 14;
        break;

}

for (let m = 0; m < 4; m++) {
    for (let i = 0; i <= 14; i++) {
        if (i === 2) {
            print(`${n} 2 of spades, 2 of clubs, 2 of hearts, 2 of diamonds`);
            n++;
        } else if (i === 3) {
            print(`${n} 3 of spades, 3 of clubs, 3 of hearts, 3 of diamonds`);
            n++;
        } else if (i === 4) {
            print(`${n} 4 of spades, 4 of clubs, 4 of hearts, 4 of diamonds`);
            n++;
        } else if (i === 5) {
            print(`${n} 5 of spades, 5 of clubs, 5 of hearts, 5 of diamonds`);
            n++;
        } else if (i === 6) {
            print(`${n} 6 of spades, 6 of clubs, 6 of hearts, 6 of diamonds`);
            n++;
        } else if (i === 7) {
            print(`${n} 7 of spades, 7 of clubs, 7 of hearts, 7 of diamonds`);
            n++;
        } else if (i === 8) {
            print(`${n} 8 of spades, 8 of clubs, 8 of hearts, 8 of diamonds`);
            n++;
        } else if (i === 9) {
            print(`${n} 9 of spades, 9 of clubs, 9 of hearts, 9 of diamonds`);
            n++;
        } else if (i === 10) {
            print(`${n} 10 of spades, 10 of clubs, 10 of hearts, 10 of diamonds`);
            n++;
        } else if (i === 11) {
            print(`${n} J of spades, J of clubs, J of hearts, J of diamonds`);
            n++;
        } else if (i === 12) {
            print(`${n} Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
            n++;
        } else if (i === 13) {
            print(`${n} K of spades, K of clubs, K of hearts, K of diamonds`);
            n++;
        } else if (i === 14) {
            print(`${n} A of spades, A of clubs, A of hearts, A of diamonds`);
            n++;
        }
    }
}