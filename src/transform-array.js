const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed provArr based on the control sequences that original
 * provArr contains
 * 
 * @param {Array} arr initial provArr
 * @returns {Array} transformed provArr
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	

	let str1 = '--double-next';
	let str2 = '--discard-next';
	let str3 = '--double-prev';
	let str4 = '--discard-prev';
	let provArr = [];
	provArr = provArr.concat(arr);
	if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
	if (!Array.isArray(arr)) return;

	if (arr[arr.length - 1] === str1 || arr[arr.length - 1] === str2) {

		provArr.pop();

		return provArr;
	}
	if (arr[0] === str3 || arr[0] === str4) {

		provArr.shift();

		return provArr;
	}
	if (arr[arr.length - 1] === str1 || arr[0] === str3) {

		return provArr;
	}
	if (arr[arr.length - 1] === str2 || arr[0] === str4) {

		return provArr;
	}
	for (let i = 0; i < provArr.length; i++) {

		if (provArr[i] === str2 && provArr[i + 2] === str3) {

			provArr.splice(i, 3);

			i += 2;
		}
		if (provArr[i] === str1 && provArr[i + 2] === str3) {

			provArr[i] = provArr[i + 1];

			provArr[i + 2] = provArr[i + 1];

			i += 2;
		}
		if (provArr[i] === str2 && provArr[i + 2] === str4) {

			provArr.splice(i, 3);
			i += 2;
		}
		if (provArr[i] === str1 && provArr[i + 2] === str4) {

			provArr[i] = provArr[i + 1];

			provArr.splice(i + 1, 2);
			i += 2;
		}
		if (provArr[i] === str1) {
			provArr[i] = provArr[i + 1];
		}
		if (provArr[i] === str3) {
			provArr[i] = provArr[i - 1];
		}
		if (provArr[i] === str2) {
			provArr.splice(provArr[i + 1], 1);
		}
		if (provArr[i] === str4) {
			provArr.splice(provArr[i - 1], 1);
		}
		
	}
	return provArr;
}

module.exports = {
  transform
};
