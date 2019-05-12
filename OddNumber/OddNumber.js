// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    // Character Map
    let charMap = {};
    // Loop through array to 
    for(let char of A){
      if(charMap[char]) charMap[char] ++; 
      else charMap[char] = 1;
    }
    // Create number storage 
    let currNum;
    // split object into entrie arrays
    let entries = Object.entries(charMap);
    // Loop over entries
    for (const [key, value] of entries) {
    // check for odd number and convert to number
      if(value % 2 !== 0) currNum = Number(key);
    }
    return currNum;
  }
  

  module.exports = findOdd;
  