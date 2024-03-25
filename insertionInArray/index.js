let arr1 = [23, 45, 32, 21, 35, 29];

let x = 4;
let index = 0;
// add x in  at position arr1[4];



let insertArray = (arr, c, position) => {

    let lengtharr1 = arr.length;

    for (let i = lengtharr1; i > position; i--) {
        arr[i] = arr[i - 1];

    }
    arr[position] = c;
    return arr;

}

const result = insertArray(arr1, x, index);
console.log('result', result);

