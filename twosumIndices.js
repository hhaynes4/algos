var twoSum = function (nums, target) {
  // keep track of leftovers in a cache
  const leftovers = {};
  const results = [];
  // if I come across a num equal to the left over, I will return both in an array
  for (let i = 0; i < nums.length; i++) {
    // if nums is equal to a leftover value, push the current i and the saved i
    if (leftovers.hasOwnProperty(nums[i])) {
      results.push(leftovers[nums[i]], i);
      // save the leftover value equal to the index
    } else {
      leftovers[target - nums[i]] = i;
    }
  }
  return results;
};

console.log(twoSum([2, 11, 7, 15], 9));
