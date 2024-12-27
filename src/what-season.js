const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let result = '';
  let mon = date.getMonth();
  if (date === 'date') {
    result = 'Invalid date!';
  } else if (mon <= 1 || mon === 11) {
      result = 'winter';
    } else if (mon >= 2 && mon <= 4) {
      result = 'spring';
    } else if (mon >= 5 && mon <= 7) {
      result = 'summer';
    } else if (mon >= 8 && mon <= 10) {
      result = 'autumn';
    } 
    return result;
 
}

module.exports = {
  getSeason
};
