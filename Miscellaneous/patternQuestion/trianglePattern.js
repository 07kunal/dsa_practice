// Form the pattern to make lower left triangle from 1 to 10

// {
//     10 9 8 7
//     6 5 4 
//     3 2
//     1
// }
let row = 4;
let column = 4;
let itemToPrint = 10;

const printSequence = (r,c,item)=>{
    for (let i = 1; i <= r; i++){  
        let result = '';
        for (let j = c ; j>=i; j--){  
            result += item + ' ';
            item--;
        }
        console.log(i,result);
    }

}

printSequence(row,column,itemToPrint);