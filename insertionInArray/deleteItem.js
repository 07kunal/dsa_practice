let arr1 = [23, 45, 32, 21, 35, 29];

let index = 3;

const rmElement = (arr, eIndex) => {
    let arrlength = arr.length;
    let newArrLength = arrlength - 1;
    for (let j = eIndex; j <= newArrLength - 1; j++) {
        arr[j] = arr[j + 1];
    }
    arr.length = arr.length - 1;
    return arr;

}
const result = rmElement(arr1,index);
console.log('result',result);