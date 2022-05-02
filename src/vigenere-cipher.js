const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * bul and reverse ciphering machines according to task description
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
	liter = [
		'A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];
	
	  constructor(bul = true) {
		this.bul = bul;
	  }
	
	  encrypt(message, key) {

		if (message === undefined || key === undefined) {

		  throw new Error('Incorrect arguments!')
		}
	
		const text = message.toUpperCase();

		const textKeys = key.toUpperCase();

		let countKey = 0;

		let str = '';
	
		for (let i = 0; i < message.length; i++) {
		  let lit;
		  if (this.liter.includes(text[i]))
		   {
			const keyLetter = this.Search(countKey, textKeys);

			countKey++;

			lit = this.literSearch(text[i], keyLetter);

		  } else {

			lit = text[i];
		  }
	
		  str += lit;
		}
	
		return this.straighten(str);

	  }
	
	  decrypt(el, key) {
		  
		if (el === undefined || key === undefined) {

		  throw new Error('Incorrect arguments!')
		}
	
		const str = el.toUpperCase();

		const textKeys = key.toUpperCase();

		let countKey = 0;

		let str2 = '';
	
		for (let i = 0; i < str.length; i++) {

		  let litsumb;

		  if (this.liter.includes(str[i])) {

			const keyLetter = this.Search(countKey, textKeys);

			countKey++;

			litsumb = this.findDecryptLetter(str[i], keyLetter);

		  } else {

			litsumb = str[i];
		  }
		  str2 += litsumb;
		}
	
		return this.straighten(str2);
	  }
	
	  straighten(el) {

		return this.bul ? el : el.split('').reverse().join('');
	  }
	
	  Search(index, key) {

		let place = (index + 1) % key.length;

		if (place === 0) place = key.length;

		return key[place - 1];
	  }
	
	  literSearch(messageLetter, keyLetter) {

		const indlit = this.liter.indexOf(messageLetter);

		const indKey = this.liter.indexOf(keyLetter);

		let indLitForKey = indlit + indKey;

		indLitForKey = indLitForKey > (this.liter.length - 1)
		
		  ? indLitForKey - (this.liter.length)
		  : indLitForKey;

		return this.liter[indLitForKey];
	  }
	
	  findDecryptLetter(lit, keyLetter) {

		const indLitForKey = this.liter.indexOf(lit);

		const indKey = this.liter.indexOf(keyLetter);

		let lettIndDir = indLitForKey - indKey;

		lettIndDir = lettIndDir < 0
		
		  ? lettIndDir + this.liter.length
		  : lettIndDir;
	
		return this.liter[lettIndDir];
	  }
}

module.exports = {
  VigenereCipheringMachine
};
