let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

// require newArray = [1,2,3,4,5,6,7,8,9,10];

let newArray = [];
const mergingArray = (Arr1, Arr2) => {
    let arr1length = Arr1.length - 1;
    let arr2length = Arr2.length - 1;
    newArray = Arr1;
    console.log('newArray1', newArray);
    if (newArray.length === Arr1.length) {
        for (let j = 0; j <= arr2length; j++) {
            newArray.push(Arr2[j]);
        }
    }
    return newArray;

}

const result = mergingArray(arr1, arr2);
console.log('result', result);