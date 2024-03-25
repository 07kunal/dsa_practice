let arrC = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let lowerPoint = 0;
let higherPoint = arrC.length - 1;
let x = 1;

const arrFunc = (arr, findX, high, low) => {

    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] == findX) {
        return mid;
    }
    if (arr[mid] > findX) {
        return arrFunc(arr, x, mid - 1, lowerPoint);
    }

    if (arr[mid] < findX) {
        return arrFunc(arr, x, higherPoint, mid + 1);
    }


    return -1;
};
const result = arrFunc(arrC, x, higherPoint, lowerPoint);

console.log('mid value', result, "value is " , arrC[result]);

