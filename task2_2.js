// если result > 0, то arr1 'больше' чем arr2
function compareArrays(arr1, arr2) {
    result = 0; 
    for(let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        if (arr1[i] > arr2[i]) result++;
        if (arr1[i] < arr2[i]) result--;
    }
    // за каждый доп. элемент массива тоже прибавляем по единице
    result += arr1.length - arr2.length; 
    return result;
}