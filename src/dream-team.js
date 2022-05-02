const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if(!Array.isArray(members)){return false}
	let str='';
	members.forEach((el)=>{
		if(typeof el =='string'){
			if(el[0]!=' '){str+=el[0];return}
			if(el[1]!=' '){str+=el[1];return}
			if(el[2]!=' '){str+=el[2];return}
			if(el[3]!=' '){str+=el[3];return}
			if(el[4]!=' '){str+=el[4];return}
			if(el[5]!=' '){str+=el[5];return}
			if(el[6]!=' '){str+=el[6];return}
			if(el[7]!=' '){str+=el[7];return}
			
		}
	})
	let arr=str.toUpperCase().split('').sort();
	return arr.join('');
}

module.exports = {
  createDreamTeam
};
