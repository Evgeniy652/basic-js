const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let sum=0;
	let strInd='';
	matrix.forEach((el,ind)=>{
		if(ind==0){
			el.forEach((v,i)=>{
				sum+=v;
				if(v==0){strInd+=i}
			})
		}
		if(ind>0){
			el.forEach((e,j)=>{
				if(!strInd.includes(j)){
					sum+=e;
					if(e==0){strInd+=j}
				}
			})
		}
	})
	return sum;

}

module.exports = {
  getMatrixElementsSum
};
