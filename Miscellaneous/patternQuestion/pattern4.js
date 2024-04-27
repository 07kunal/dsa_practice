// Q1 Form the pattern to make upper left  angle triangle from 1 to 10 

// {
//     1
//     1 2 3 
//     1 2 3 4 
//    .
//    . 
//    . 
//     ............10
// }

// let row = 10;

// const printSequence = (r)=>{
//     for (let i = 1; i <= r; i++){
//         let result = '';
//         for (let j = 1; j<=i; j++){
//             result += j + ' ';
//         }
//         console.log(i,result);
//     }

// }

// printSequence(row);

//Q2  Form the pattern to make upper left angle triangle from 1 to 10 ( revers form)

// {
//     1
//     2 1 
//     3 2 1
//     4 3 2 1
//    . 
//    . 
//     ...........2 1
// }

// let row = 10;


// const printSequence = (r)=>{
//     for (let i = 1; i <= r; i++){
//         let result = '';
//         for (let j = 1; j<=i; j++){
//             result += (i - j +1 ) + ' ';
//         }
//         console.log(i,result);
//     }

// }

// printSequence(row);

//Q3  Form the pattern to make lower right angle triangle from 1 to 10 ( revers form)

// {
//     ..........2 1
//     . 
//     .
//     .
//     3 2 1
//     2 1
//     1
// }

// let row = 5;
// let col = 5;
// const printSequence = (r,c)=>{
//     for (let i = 1; i <= r; i++){
//         let result = '';
//         for (let j = c; j>=i; j--){
//             result +=  (j - i +1) + ' ';
//         }
//         console.log(i,result);
//     }

// }

// printSequence(row,col);



//Q4  Form the pattern to make upper right angle triangle from 1 to 10 ( revers form)

// {
//                1
//               12
//              123
//     .
//     .
//     .
//     1........910
// }

// let row = 5;
// let col = 5;
// const printSequence = (r,c)=>{
//     for (let i = 1; i <= r; i++){
//         let result = '';
//         for (let s = 1; s<=(r-i); s++){
//             result += ' ';
//         }
//         for (let j = 1; j<=i; j++){
//             result +=  j;
//         }
//         console.log(i,result);
//     }

// }

// printSequence(row,col);


//Q5  Form the pattern to make lower left angle triangle from 1 to 10 ( revers form)

// {
//     1 2 3. ....
//               .
//               .
//           1 2 3
//             1 2
//               1
// }

let row = 5;
let col = 5;

const printSequence = (r, c) => {
    for (let i = 1; i <= r; i++) {
        let result = '';
         // adding space
        for (let s = c; s >= (r - i); s--) {
            result += ' ';
        }
        // writing pattern
        for (let j = c; j >= i; j--) {
            result += (c - j + 1);
        }
        console.log(i, result);
    }
}

printSequence(row, col);