let arr1 = [23, 45, 32, 21, 35, 29];

let x = 4;
let index = 0;
// add x in  at position arr1[4];



let insertArray = (arr, c, position) => {

    let lengtharr1 = arr.length;
    console.log('length', lengtharr1);

    for (let i = lengtharr1; i > position; i--) {
        arr[i] = arr[i - 1];
        console.log('arr inside loop', arr);

    }
    console.log('arr', arr);
    arr[position] = c;
    return arr;

}

const result = insertArray(arr1, x, index);
console.log('result', result);

