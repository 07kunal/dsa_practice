//Q1 make a pattern from 1-10 to form the uper piramid. 
// e.g 
//    1
//   2 3
//  4 5 6
// 7 8 9 10   

// let row = 4;
// let itemToprint = 1;
// const printSequence = (r,item)=>{
//     for (let i = 1; i <= r; i++){
//         let result = '';
//         for (let s = 1; s<=(r-i); s++){
//             result += ' ';
//         }
//         for (let j = 1; j<=i; j++){
//             result +=  item + ' ';
//             item++;
//         }
//         console.log(i,result);
//     }

// }

// printSequence(row,itemToprint);

// Q2 make a pattern from 1-10 to form the uper piramid. 
// e.g 
//  1 2 3 4
//   5 6 7 
//   8 9
//   10

// let row = 4;
// let col = 4;
// let itemToprint = 1;

// const printSequence = (r, c,item) => {
//     for (let i = 1; i <= r; i++) {
//         let result = '';
//          // adding space
//         for (let s = c; s >= (r - i); s--) {
//             result += ' ';
//         }
//         // writing pattern
//         for (let j = c; j >= i; j--) {
//             result += item + ' ';
//             item++;
//         }
//         console.log(i, result);
//     }
// }

// printSequence(row, col,itemToprint);


// Q3 make a pattern from 10-1 to form the uper piramid. 
// e.g 
//  10 9 8 7          * * * *
//   6 5 4       or    * * *
//   3 2                * *
//    1                  *

let row = 5;
let col = 5;
let itemToprint = 15;

const printSequence = (r, c,item) => {
    for (let i = 1; i <= r; i++) {
        let result = '';
         // adding space
        for (let s = c; s >= (r - i); s--) {
            result += ' ';
        }
        // writing pattern
        for (let j = c; j >= i; j--) {
            result += '* ';
            item--;
        }
        console.log(i, result);
    }
}

printSequence(row, col,itemToprint);