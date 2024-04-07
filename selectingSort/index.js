let unSortedArr = [156, 141, 35, 97, 8, 51, 111];


let swapFunc = (arr, sI, I) => {
    let bigValue = arr[I];
    arr[I] = arr[sI];
    arr[sI] = bigValue;


}


let selectionSortFunc = (arr) => {
    let unsortedLength = arr.length;

    for (let i = 0; i <= unsortedLength - 1; i++) {
        let smallIndex = i;
        for (let j = i + 1; j < unsortedLength; j++) {
            if (arr[i] < arr[j]) {
                smallIndex = j;

                swapFunc(arr, smallIndex, i);
            }
        }
    }
    return arr;

}

const result = selectionSortFunc(unSortedArr);
console.log('result', result);
