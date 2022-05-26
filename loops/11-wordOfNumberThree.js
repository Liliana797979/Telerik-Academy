let input = [6, 1, "go", 1, 1, "there", "IT"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let string = "";
let numb = 0;

for (let i = 0; i < n; i++) {
    let data = gets();
    
    switch (typeof data) {
        case "string":
            string += data + "-";
            break;
        case "number":
        numb += data;
        break;
        default:
            break;
    }
}

string ? print(string.substring(0, string.length - 1)) : print("no words");
print(numb);