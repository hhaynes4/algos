/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// approach: most frequent elements
// keep track of frequencies in an object
// return the top k frequencies
var topKFrequent = function (nums, k) {
  // declare a obj
  const freqs = {};

  // loop through the nums array
  for (const num of nums) {
    // if it does exist (add 1 to current value) or doesnt exist (add 1 to zero)
    freqs[num] = (freqs[num] || 0) + 1;
  }
  // declare an array
  const resultsArr = [];
  // create an array of nums (properties) ordered by frequency (values)
  const uniqueNums = Object.keys(freqs).sort((a, b) => freqs[b] - freqs[a]);
  // grab just the top k
  return uniqueNums.slice(0, k).map(Number);
};

console.log(topKFrequent([2, 2, 1, 1, 1, 3, 4, 4, 4, 4], 2));
