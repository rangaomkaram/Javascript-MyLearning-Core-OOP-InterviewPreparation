//calculates the length of the longest consecutive run of 1s in the binary representation of a given integer n

function longestConsecutiveOnes(n) {
    let maxOnes = 0;
    let currentOnes = 0;

    while (n > 0) {
        if (n & 1 === 1) {
            currentOnes++;
            maxOnes = Math.max(maxOnes, currentOnes);
        } else {
            currentOnes = 0;
        }
        n >>= 1;
    }

    return maxOnes;
}

console.log(longestConsecutiveOnes(156))