/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const ls = s.split('');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (vowels.has(ls[left]) && vowels.has(ls[right])) {
            [ls[left], ls[right]] = [ls[right], ls[left]];
            left++;
            right--;
        } else if (vowels.has(ls[left])) {
            right--;
        } else {
            left++;
        }
    }

    return ls.join('');
};
