/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let x = '';
    let y = '';
    let countOccurrences = (str, element) => {
        return str.split('').reduce((count, char) => count + (char === element), 0);
    }

    for (let i = 1; i <= str1.length && i <= str2.length; i++) {
        if (str1.length % i === 0 && str2.length % i === 0) {
            let sub = str1.slice(0, i);
            if (sub.repeat(str1.length / i) === str1 && sub.repeat(str2.length / i) === str2) {
                x = sub;
            }
        }
    }

    return x;
};
