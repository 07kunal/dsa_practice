let sortedArray = [2, 34, 82, 85, 87, 90, 200, 201,210,300,650,745,785,800,805,810];
console.log('sortedArray length',sortedArray.length);
let x = 90;
console.log('index :',sortedArray.indexOf(x));
const searchitem = (arr,i) => {

    let h = arr.length - 1;
    for (let l = 0; l <= h;) {

        // let mid = l + Math.floor((h - l) / 2);
        let mid = Math.floor((h + l) / 2);

        console.log('mid', mid);
        console.log('h',h);
        console.log('l',l);
        // console.log('arr{mid}',arr[mid]);
        if (arr[mid] === i) {
            return mid;
        }
        if (arr[mid] > i) {
           console.log('left');
            h = mid - 1;
        } else {
            console.log('right');
            l = mid + 1;
        }
    }
    return -1;
}

const result = searchitem(sortedArray,x);
// console.log('result',result);

if(result === -1){
    console.log('not found');
}else {
    console.log('found at :', result, 'result is :',sortedArray[result]);
}

