/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:
Input: strs = ["a"]
Output: [["a"]]
Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */


/**
 * @param {string[]} strs
 * @return {string[][]}
 */


const groupAnagrams = function(strs) {
    // create an empty object
    const cache = {};
    // loop through the strings
    for (let i = 0; i < strs.length; i++) {
    // sort the string and if doesnt exist, add the sorted string as the key and the value as the original string in an array
    const sorted = strs[i].split('').sort().join('');
    if (!cache.hasOwnProperty(sorted)) {
       cache[sorted] = [strs[i]]
    } else {
    // if it does exist, add that value to the existing array
       cache[sorted].push(strs[i])
    }
    }
    // create an array of arrays from the object 
    const resultsArr = []
    for (let prop in cache) {
       resultsArr.push(cache[prop])
    }
    return resultsArr;
 };
 
 
 console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))