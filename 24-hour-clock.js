// Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
//input: "23:59", "00:01"
//output: 2


function timediff(time1, time2){
    const time1Convert = (Number(time1.slice(0,2)) * 60) + Number(time1.slice(3))
    const time2Convert = (Number(time2.slice(0,2)) * 60) + Number(time2.slice(3))
    const minDifference = Math.min(Math.abs(time1Convert - time2Convert), 1440 - (Math.abs(time1Convert - time2Convert)))
    return minDifference;
}

console.log(timediff("23:59", "00:01"))