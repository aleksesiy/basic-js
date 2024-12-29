const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, keyWord) {
    if (!message || !keyWord) throw new Error("Invalid input!");

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    keyWord = keyWord.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (alphabet.includes(messageChar)) {
        const messageIndex = alphabet.indexOf(messageChar);
        const keyChar = keyWord[keyIndex % keyWord.length];
        const keyIndexValue = alphabet.indexOf(keyChar);

        const newChar = alphabet[(messageIndex + keyIndexValue) % 26];
        result += newChar;
        keyIndex++; 
      } else {
        result += messageChar;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, keyWord) {
    if (!message || !keyWord) throw new Error("Invalid input!");

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    keyWord = keyWord.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (alphabet.includes(messageChar)) {
        const messageIndex = alphabet.indexOf(messageChar);
        const keyChar = keyWord[keyIndex % keyWord.length];
        const keyIndexValue = alphabet.indexOf(keyChar);

        const newChar = alphabet[(messageIndex - keyIndexValue + 26) % 26];
        result += newChar;
        keyIndex++;
      } else {
        result += messageChar;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
