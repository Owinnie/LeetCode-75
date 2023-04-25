/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]} result
 */
var kidsWithCandies = function(candies, extraCandies) {
    const n = candies.length;
    let result = new Array(n);
    
    for (let i = 0; i < n; i++) {
        if ((candies[i] + extraCandies) >= Math.max(...candies)) {
            result[i] = true;
        } else {
            result[i] = false;
        }
    }

    return result;
};
