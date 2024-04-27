// Form the pattern to make upper left triangle from 1 to 10 

// {
//     1
//     2 3 
//     4 5 6 7
//     ........10
// }

let itemToPrint = 1;
let column = 4;
let row = 4;

const printSequence = (r,c,item)=>{
    for (let i = 1; i <= r; i++){
        let result = '';
        for (let j = 1; j<=i; j++){
            result += ' ' + item + ' ';
            item++;
        }
        console.log(i,result);
    }

}

printSequence(row,column,itemToPrint);

// Now print this pattern

// {
//     1
//     2 3 
//     3 4 5 
//     4 5 6 7
//     ........10
// }

// let itemToPrint = 1;
// let column = 4;
// let row = 4;

// const printSequence = (r,c,item)=>{
//     for (let i = 1; i <= r; i++){
//         item = i;
//         let result = ' ';
//         for (let j = 1; j<=i; j++){
//             result += ' ' + item ;
//             item++;
//         }
//         console.log(result);
//     }

// }

// printSequence(row,column,itemToPrint);