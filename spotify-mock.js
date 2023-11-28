// You are given a log of data with multiple entries containing a user,
// a song they listened to, and a timestamp for the stream.

// Given this log and a song name, return the number of times a song was played.

// If a song is not in the list, return 0.

// Example:
// countSong('Dynamite', logData) //--> 4
// countSong('BlankSpace', logData) //--> 0

// inputs: song name (string), logData (string)
// output: number (times played)

// assume you dont need to deal with case sensitivity

function countSong(songName, logData) {
  let count = 0;

  //two pointers (songName length window)
  let left = 0;
  let right = songName.length;

  // iterate over the logData looking for songName
  while (right <= logData.length) {
    if (logData.substring(left, right) === songName) {
      count++;
    }
    // shift the window by 1 each iteration
    left++;
    right++;
  }

  return count;
}

// console.log(countSong('Dynamite', logData)) //--> 4
// console.log(countSong('BlankSpace', logData)) //--> 0

const logData = `Arnold,Dynamite,1529902800000
  Denise,ShapeOfYou,1597467600000
  Arnold,OneDance,1577426400000
  Zoe,ShapeOfYou,1628398800000
  Denise,Dynamite,1655614800000
  Zoe,OneDance,1459054800000
  Arnold,Dynamite,1590037200000
  Zoe,Dynamite,1529902800000`;

// Given a user and the log, return an object with the number of streams of each song a user listened to. Otherwise, return an empty object

// Example:
// getUserStreams('Arnold', logData) //--> { Dynamite: 2, OneDance: 1 }
// getUserStreams('Random', logData) //--> { }

// inputs: userName (string), logData(string)
// outputs: object

console.log(logData);
