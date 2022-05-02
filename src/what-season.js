const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date ) {
	const  season=['winter','spring','summer','autumn'];
	if(arguments.length==0){return 'Unable to determine the time of year!'};
	if ( date.hasOwnProperty('toString') || !(date instanceof Date) || date.hasOwnProperty('getMonth')) throw new Error('Invalid date!');
	let weatherTime = date.getMonth()

	if (weatherTime === 11 || weatherTime === 0 || weatherTime === 1) {

	  return season[0];
	}
	if (weatherTime === 2 || weatherTime === 3 || weatherTime === 4) {

	  return season[1];
	}
	if (weatherTime === 5 || weatherTime === 6 || weatherTime === 7) {

	  return season[2];
	}
	if (weatherTime === 8 || weatherTime === 9 || weatherTime === 10) {
		
	  return season[3];
	}

}

module.exports = {
  getSeason
};
