const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const addition = options.addition;
  const addReps = options.additionRepeatTimes;
  const addSep = options.additionSeparator;
  const reps = options.repeatTimes;
  const sep = options.separator;


  let modifiedStr = str;
  if(addition !== undefined){
    for (let i = 0; i < addReps; i++) {
      modifiedStr += addition;
      if (i < addReps - 1 && addSep !== undefined ) {
        modifiedStr += addSep;
      }
    }
  }


  let result = '';
  for (let n = 0; n < reps; n++) {
    result += modifiedStr;
    if (n < reps - 1 && sep !== undefined) {
      result += sep;
    }
  }

  return result;
}
module.exports = {
  repeater
};

