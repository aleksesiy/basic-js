const { NotImplementedError } = require('../extensions/index.js');
/**
 * Given an array with heights, sort them except if the value is -1.
 * @param {Array} arr
 * @return {Array}
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180, 190]
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190, 190]
 */
function sortByHeight(arr) {
  // Extract all the non -1 values
  const sortedValues = arr.filter(x => x !== -1).sort((a, b) => a - b);

  // Replace non -1 values in the original array with the sorted values
  let index = 0;
  return arr.map(x => (x === -1 ? x : sortedValues[index++]));
}

module.exports = {
  sortByHeight,
};

