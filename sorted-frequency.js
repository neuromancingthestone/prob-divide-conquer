function getLeftInd(arr, val) {
//    console.log("getLeftInd");    
    let iLeft = 0;
    let iRight = arr.length-1;
    let mid = 0;

    while(iLeft <= iRight) {
        mid = Math.floor((iLeft+iRight)/2);
//        console.log(`iLeft = ${iLeft} | iRight = ${iRight} | mid = ${mid} | val = ${arr[mid]}`);

        if((val > arr[mid-1]) && (arr[mid] === val)) {
            return mid;
        } else if (val > arr[mid]) {
            iLeft = mid + 1;
        } else {
            iRight = mid - 1;
        }
    }
//    console.log(`iLeft = ${iLeft} | iRight = ${iRight} | mid = ${mid} | val = ${arr[mid]}`);

    if((iLeft > iRight) && (val == arr[mid]))   return mid;
    else return 0;    
}

function getRightInd(arr, val) {
//    console.log("getRightInd");
    let iLeft = 0;
    let iRight = arr.length-1;
    let mid = 0;

    while(iLeft <= iRight) {
        mid = Math.floor((iLeft+iRight)/2);

        if((val < arr[mid+1]) && (arr[mid] === val)) {
            return mid;
        } else if (val < arr[mid]) {
            iRight = mid - 1;
        } else {
            iLeft = mid + 1;
        }
    }

    if((iLeft > iRight) && (val == arr[mid]))   return mid;
    else return 0;     
}

function sortedFrequency(arr, val) {
    let left = getLeftInd(arr,val);
//    console.log(`Left -${left}-`);
    let right = getRightInd(arr,val);    
//    console.log(`Right -${right}-`);    
    if(left == 0 && right == 0) return 0;
    else return (right - left) + 1;
}


// l              x               r
//  l     x     r
//  l x r
//    l r
// [0,0,0,1,1,1,1,1,1,1,1,1,2,2,3,3]


// module.exports = sortedFrequency