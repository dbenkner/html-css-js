const nbrs = [96, 59, 4, 68, 58, 48, 17, 76, 32, 71, 11, 6, 3, 32, 85, 13, 60, 1, 27, 15, 96, 31, 75, 5, 2];

const average = (nums) => {
    let sum = 0;
    for(num of nums) {
        sum += num;
    }
    console.log(`$"The average is ${1.0 * sum / nums.length}`);
}
const min = (nums) => {
    let minNum = 10000;
    for (let num of nums) {
        minNum = num < mWinNum ? num : minNum;
    }
    console.log(`The min is: ${minNum}`);
}
const max = (nums) => {
    let maxNum = 0;
    for (let num of nums) {
        if (num > maxNum) maxNum = num;
    }
    console.log(`The max is: ${maxNum}`);
}
average(nbrs);
min(nbrs);
max(nbrs);