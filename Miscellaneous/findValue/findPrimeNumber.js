// Find given number is prime number or not ? e.g

let num = 11;

let sum = (numb) => {
    let result = 0;
    for (let i = 2; i < numb; i++) {
        if ((numb % i === 0)) {
            console.log('not prime number', i);
        } else {
            console.log(' prime number', i);

        }
    }
    return result;

}
const result2 = sum(num);

console.log('resutl', result2);





