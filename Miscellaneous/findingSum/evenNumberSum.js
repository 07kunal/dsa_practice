// find the sum of all the even number from 1 to N, where N is input value.

let num = 10;

let sum = (numb) => {
    let result = 0;
    for (let i = 0; i <= numb; i++) {
        if (i % 2 === 0) {
            console.log('even num', i);
            result += i;
        }
    }
    return result;

}
const result2 = sum(num);

console.log('resutl', result2);