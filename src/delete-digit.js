const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

 let str = String(n);
 let len = str.length;
 let arr=[];
 
 for(let i=0; i<len; i++) {
	let a=[];
	a=[...str];
 
 a.splice(i,1);
	  arr.push(+a.join(''));
 }
  let res=arr.sort((a,b)=>b-a);
 return res[0];
}

module.exports = {
  deleteDigit
};
