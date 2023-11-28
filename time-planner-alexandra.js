/* Time Planner
Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.
Time is given in a Unix format called Epoch (https://en.wikipedia.org/wiki/Unix_time), which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.
Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.
In your implementation assume that the time slots in a person’s availability are disjointed (http://en.wikipedia.org/wiki/Disjoint_sets), i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.
Implement an efficient solution and analyze its time and space complexities.
Examples:
input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: [] # since there is no common slot whose duration is 12
Constraints:
    •    [time limit] 5000ms
    •    [input] array.array.integer slotsA
    ◦    1 ≤ slotsA.length ≤ 100
    ◦    slotsA[i].length = 2
    •    [input] array.array.integer slotsB
    ◦    1 ≤ slotsB.length ≤ 100
    ◦    slotsB[i].length = 2
    •    [input] integer
    •    [output] array.integer
*/



/*
i: two arrays of nested arrays (each nested array has two elements, the first element is the starting time of the available slot, and the second element is the ending time of the available slot), an integer 'dur' representing duration of meeting in seconds  
    assumptions: slot arrays are sorted by start time and slots are not overlapping

o: an array: empty if no overlap, containing the start and end time of the earliest overlapping time slot

strategy:
for each nested array, check if the difference between the start and end times is greater than or equal to the required duration. if it is, check if the corresponding nested array in the second array has a first element that is smaller than the second element in the first array by the size of the duration. if it is larger, push each of those values into the result array and return.  if it is smaller, move to next element in the first array


*/

const timePlanner1 = (slotsA, slotsB, dur) => {
    let result = [];
  
    //iterate through the first array
    for (let i = 0; i < slotsA.length; i++) {
      if (i > slotsB.length - 1) return;
      //if the difference between the start and end times of the nested array is larger than the duration
      console.log(slotsA[i][1] - slotsA[i][0] > dur);
      if (slotsA[i][1] - slotsA[i][0] > dur) {
        //compare the end value to the start value of the corresponding nested array in the longer array to see if the difference is greater than the duration
        if (slotsB[i][1] - slotsA[i][0] > dur) {
          //if it is greater, populate result array with the start value of the longer array and the value + duration for the ending value and return
          return (result = [slotsB[i][0], (slotsB[i][0] += dur)]);
        }
      }
    }
    console.log(result);
    return result;
  };

const timePlanner = (slotsA, slotsB, dur) => {

}

console.log(timePlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [25, 30],[60, 70]], 8)) // [60, 68]
console.log(timePlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 12)) // []

