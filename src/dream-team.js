const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    function isString(word) {
      return typeof word === 'string';
    }
    
    function getFirstW(word) {
      return word[0];
    }
    
    function trimNames(name) {
        return name.trim();
    }
    
    const trim = members.map(trimNames);
    const sort = trim.sort();
    const filt = sort.filter(isString);
      
    if(filt.length === 0) return false;
      
    const firsts = filt.map(getFirstW);
    return firsts.join('').toUpperCase();
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
