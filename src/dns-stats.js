const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let bigArr=[];
	let obj={};
	domains.forEach((el)=>{
		
		 sArr = el.split('.').reverse();
		 if(sArr.length==3){
			let w1 ='.'+sArr[0];
			let w2 ='.'+sArr[0]+'.'+sArr[1];
			let w3 ='.'+sArr[0]+'.'+sArr[1]+'.'+sArr[2];
			bigArr.push(w1);
			bigArr.push(w2);
			bigArr.push(w3);
		 }
		 if(sArr.length==2){
			let w1 ='.'+sArr[0];
			let w2 ='.'+sArr[0]+'.'+sArr[1];
			bigArr.push(w1);
			bigArr.push(w2);
		 }
	})

	bigArr.forEach((e)=>{
		if(obj.hasOwnProperty(e)){
			let v =obj[e]+1;
			obj[e]=v;
		}
		else{obj[e]=1;}
	})
return obj;
}

module.exports = {
  getDNSStats
};
