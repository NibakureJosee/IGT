function hasSubarrayWithTargetSum(arr, target) {
    let sum = 0;
    const sumSet = new Set([0]);
    
    for (const num of arr) {
        sum += num;
        if (sumSet.has(sum - target)) {
            return true;
        }
        sumSet.add(sum);
    }
    
    return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); 
