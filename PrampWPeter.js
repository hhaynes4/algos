/**
 * Deletion Distance

The deletion distance of two strings is the minimum number of characters you neeg. For instance, the deletion distance between "heat" and "hit" is 3:
d to delete in the two strings in order to get the same strin
    By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
    We cannot get the same string from both strings by deleting 2 letters or fewer.

Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.
 */

// spend more time in high level talk
// two pointers approach
// dynamic programming ->

function deletionDistance(str1, str2) {
  // base cases:
  if (!str1.length) return str2.length;
  if (!str2.length) return str1.length;

  const total = str1.length + str2.length;

  function helper(str1Index = 0, str2Index = 0, counter = 0) {
    // base cases:
    if (str1Index >= str1.length) return counter + (str2.length - str2Index);
    if (str2Index >= str2.length) return counter + (str1.length - str1Index);
    if (str1[str1Index] === str2[str2]) {
      return helper(str1Index + 1, str2Index + 1, counter + 2);
    } else {
      return Math.max(
        helper(str1Index + 1, str2Index, counter),
        helper(str1Index, str2Index + 1, counter),
      );
    }
  }
  // helper returns the largest counter
  // return the smallest number of deletions
  return total - helper();
}

// console.log(deletionDistance('heat', 'hit'))

function deletionDistance(str1, str2) {
  // your code goes here
  // base cases
  if (str1 === str2) return 0;
  if (str1 === '') return str2.length;
  if (str2 === '') return str1.length;

  // recursive step
  let shortestSubDistance = Infinity;
  const [longer, shorter] =
    str1.length > str2.length ? [str1, str2] : [str2, str1];
  for (let i = 0; i < longer.length; i++) {
    const oneLetterOut = longer.slice(0, i) + longer.slice(i + 1);
    const subDistance = deletionDistance(shorter, oneLetterOut);
    shortestSubDistance =
      subDistance < shortestSubDistance ? subDistance : shortestSubDistance;
  }
  return shortestSubDistance + 1;
}

function meetingPlanner(slotsA, slotsB, dur) {
    // pointers looking at the slotsA meeting, slotsB meeting
    let slotsAWindow = 0;
    let slotsBWindow = 0;
  
    // overlap variable, we'll overwrite if we find any overlaps in the schedules
    let overlap = -1;
    let meetingStart = -1;
  
    while (overlap < dur) {
      if (slotsAWindow >= slotsA.length || slotsBWindow >= slotsB.length)
        return [];
  
      // compare start times of each window at slotsA and slotsB that we're curr on
      const aStart = slotsA[slotsAWindow][0];
      const aEnd = slotsA[slotsAWindow][1];
      const bStart = slotsB[slotsBWindow][0];
      const bEnd = slotsB[slotsBWindow][1];
  
      if (aStart > bStart) {
        // consider bEnd, check for overlap
        if (aStart < bEnd) {
          // this is our overlap case
          overlap = bEnd - aStart;
          meetingStart = aStart;
          slotsBWindow++;
        } else {
          // bEnd <= aStart
          // go to next b window
          slotsBWindow++;
        }
      } else {
        // consider bEnd, check for overlap
        if (bStart < aEnd) {
          // this is our overlap case
          overlap = aEnd - bStart;
          meetingStart = bStart;
          slotsAWindow++;
        } else {
          // bEnd <= aStart
          // go to next b window
          slotsAWindow++;
        }
      }
    }
    return [meetingStart, meetingStart + dur];
  }
  
  /* 
  input:  slotsA = [[10, 50], [60, 120], [140, 210]]
          slotsB = [[0, 15], [60, 70]]
          dur = 8
  output: [60, 68]
  
  input:  slotsA = [[10, 50], [60, 120], [140, 210]]
          slotsB = [[0, 15], [60, 70]]
          dur = 12
  output: [] # since there is no common slot whose duration is 12 
  */
  
  const A = [
    [10, 50],
    [60, 120],
    [140, 210],
  ];
  const B = [
    [0, 15],
    [60, 70],
  ];
  
  // console.log(meetingPlanner(B, A, 12));
  
  function meetingPlanner2(slotsA, slotsB, dur) {
      // grab the first element of each array of arrays
      let AIndex = 0;
      let BIndex = 0;
      while (AIndex < slotsA.length && BIndex < slotsB.length) {
        // deconstruct the arrays at the AIndex and BIndex!
        const [startA, endA] = slotsA[AIndex];
        const [startB, endB] = slotsB[BIndex];
        // find the later start time and earlier end time
        let latestStart = Math.max(startA, startB);
        let earliestEnd = Math.min(endA, endB);
        // can the duration happen in that range?
        if (earliestEnd - latestStart > dur) {
          return [latestStart, latestStart + dur];
        } else {
          // if not, lets check the next element of whichever has an earlier end time
          if (endA < endB) {
            AIndex++;
          } else {
            BIndex++;
          }
        }
      }
      return [];
    }
  
  //   Solution
  //   A naive solution would loop through both input arrays and check the intersection of every possible pair slots to find an overlap of at least dur seconds. This isn’t an efficient solution and its time complexity is O(N⋅M). We can do better than that.
    
  //   Since the arrays are sorted by the slots’ start times, we can iterate over both arrays in a single loop. We use two indices, one for each array, while incrementing one index at a time according the following rules: If there is a minimal overlap of dur between two given times slots, return the pair [start, start + dur], where start is the start time of said overlap. Otherwise, increment the index of the array with the earlier time slot.
    
  //   Pseudocode:
  /*   
    function meetingPlanner(slotsA, slotsB, dur):
        ia = 0
        ib = 0
    
        while (ia < slotsA.length AND ib < slotsB.length):
            start = max(slotsA[ia][0], slotsB[ib][0])
            end = min(slotsA[ia][1], slotsB[ib][1])
    
            if (start + dur <= end):
                return [start, start + dur]
    
            if (slotsA[ia][1] < slotsB[ib][1]):
                ia++
            else:
                ib++
    
        return []
   */
        //   Time Complexity: we are traversing every input array at most once, hence the time complexity is linear, i.e O(N+M), where N and N are lengths of slotsA and slotsB, respectively.
    
  //   Space Complexity: it’s O(1). We are using four auxiliary variables, all of which are occupying only a constant amount of space.
  
  
  