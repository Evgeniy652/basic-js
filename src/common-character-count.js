const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2) {
  let arr1 = [...s1];
  let arr2 = [...s2];
  if(arr1.length==0 || arr2.length==0){return 0}
  let x=[];
  let n=[];
  if(arr1.length < arr2.length){x=arr1; n=arr2}
  if(arr2.length < arr1.length){x=arr2;  n=arr1}
  if(arr2.length == arr1.length){x=arr1;  n=arr2}
   let count=0;
  x.forEach((el)=>{
	  n.find((v, ind) => {
		if (v==el) {
			 n.splice(ind, 1);
			 count++;
			 return true;
		}
	})
  })
 return count;
}

module.exports = {
  getCommonCharacterCount
};
