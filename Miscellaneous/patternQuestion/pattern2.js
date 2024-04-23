// write an program to write 1-9 in such format
//123
//456
//789 

let itemToPrint = 1;
let row = 3
let column = 3;

const printSequence = (r, c, item) => {
    for (let i = 1; i <= r; i++) {
        let str = '';
        for (let j = 1; j <= c; j++) {
            str += item + ' '
            item++;
        }
        console.log('str', str);
    }

}

printSequence(row, column, itemToPrint);