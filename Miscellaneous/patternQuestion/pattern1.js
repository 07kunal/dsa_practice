// write a pattern from 9-1 in each row;
let countToPrint = 9;
let column = 9;
let row = 9;

const printSequence = (r, c) => {
    for (i = 1; i <= r; i++) {
        let result = '';
        for (j = 1; j <= r; j++) {

            result += ` ${c - j + 1}`;

        }
        console.log(result);


    }

}
printSequence(row, column);
