const isCovered = (ranges, left, right) => {
    const isCovered = new Array(right - left + 1).fill(false);

    for (const [start, end] of ranges) {
        for (let i = Math.max(left, start); i <= Math.min(right, end); i++) {
            isCovered[i - left] = true;
        }
    }

    return isCovered.every((covered) => covered);
};

const ranges = [[1, 2], [3, 4], [5, 6]];
const left = 2;
const right = 5;

console.log(isCovered(ranges, left, right)); // Output: true
