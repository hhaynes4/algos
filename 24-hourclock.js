// Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
// convert the array to minutes and sort that array
// iterate through comparing elements next to each other

var findMinDifference = function (timePoints) {
  let minimum = Infinity;
  const converted = timePoints.map((el) => {
    let [hours, minutes] = el.split(':');
    return Number(hours) * 60 + Number(minutes);
  });
  const sorted = converted.sort((a, b) => a - b);
  // add the first element to the end for wrap around comparisons
  sorted.push(sorted[0] + 1440);

  for (let i = 0; i < sorted.length - 1; i++) {
    minimum = Math.min(minimum, Math.abs(sorted[i] - sorted[i + 1]));
    if (minimum === 0) {
      return 0;
    }
  }
  return minimum;
};

console.log(findMinDifference(['00:00', '04:00', '22:00'])); //120

/* Review:
time complexity = O(n logn)
space = O(n)
*/