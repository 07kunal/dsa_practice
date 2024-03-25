let factorialResult = 1;
let findFactorial = (x) => {
    for (let i = 0; i < x; i++) {

            factorialResult *= x - i;
        
    }
    return factorialResult;
}

const result = findFactorial(5);

console.log(result);


// Recursive way ;

let findRecFactorial = (x)=>{
    if (x == 1){
        return x;

    } else {
        return x * findRecFactorial (x -1);
    }
} 

console.log(findRecFactorial(3));
