let input = ["good", "TA", 32, 42.5, -1];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

for (let i = 0; i < input.length; i++) {
    let check = gets();
    let output = "";

    switch (typeof check) {
        case "string":
            for (let index = check.length; index >= 0; index--) {
                output += check.charAt(index);
            }
            print(output);
            break;
    
        case "number":
            let numb = check;
            numb++;
            output = Number(numb);
            if (numb % 1) {
                print (numb + "0");
                break;
            }
            print(output);
            break;
            default:
            break;
    } 
}