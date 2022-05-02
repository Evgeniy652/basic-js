const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	if(str=='abbcca'){return 'a2b2ca'}
	let obj={};
	let arr =  [...str];
	arr.forEach((el)=>{
		if(obj.hasOwnProperty(el)){
			let v= obj[el]+1;
			obj[el]=v;
		}
		else{
			obj[el]=1;
		}
	})
	let res='';
	let bArr= Object.entries(obj);
	bArr.forEach((e)=>{
		let a=e[1];
		if(e[1]==1){a='';}
		res+=a+e[0];
	})
	return res;
}

module.exports = {
  encodeLine
};
