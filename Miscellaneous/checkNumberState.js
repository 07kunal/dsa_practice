// checking whether the given number is positive , negative and zero;

let x = -5;
let numState;

const numberState = (num) => {
    if (num >= 0) {
        numState = "num is positive";
    }
    if (num < 0) {
        numState = "num is negative";
    }
    if (num === 0) {
        numState = "num is zero";
    }

    return numState;
}


console.log('result', numberState(x));