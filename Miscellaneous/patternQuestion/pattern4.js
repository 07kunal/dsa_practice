// Form the pattern to make triangle from 1 to 10 

// {
//     1
//     1 2 3 
//     1 2 3 4 
//    .
//    . 
//    . 
//     ............10
// }

let row = 10;

const printSequence = (r)=>{
    for (let i = 1; i <= r; i++){
        let result = '';
        for (let j = 1; j<=i; j++){
            result += j + ' ';
        }
        console.log(i,result);
    }

}

printSequence(row);