const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

	let a =[];
	arr.forEach((el,ind)=>{
	
		if(el!=-1){
			a.push(el);
		}
	})
	let sortArr= a.sort((a,b)=>a-b);
	let newArr =arr;
	newArr.forEach((e,i)=>{
		if(e!=-1){
			newArr.splice(i,1,a[0]);
			a.shift();
		}
	})
	return newArr;
}

module.exports = {
  sortByHeight
};
