function findFirstZero(arr) {
    let iLef = 0;
    let iRig = arr.length - 1;
    let iCur = 0;

    while(iRig >= iLef) {
        iCur = iLef + Math.floor((iRig - iLef) / 2);
        if((arr[iCur] == 0) && (arr[iCur-1] == 1)) {
            return iCur;
        } else if (arr[iCur] == 1) {
            iLef = iCur + 1;
        } else {
            iRig = iCur - 1;
        }
    }
    return -1;
}

function countZeroes(arr) {
    const first = findFirstZero(arr);
    return arr.length - first;
}
