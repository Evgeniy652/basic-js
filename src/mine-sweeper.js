const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The res should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let res = [];

  for (let i = 0; i < matrix.length; i++) {

    res[i] = [];
	
    for (let l = 0; l < matrix[i].length; l++) {

      let s = 0;

      let x = i > 0 ? i - 1 : i;

      let y = i < matrix.length - 1 ? i + 1 : i;

      let t = l > 0 ? l - 1 : l;

      let g = l < matrix[i].length - 1 ? l + 1 : l;



      for (let l = x; l <= y; l++) {

        for (let k = t; k <= g; k++) {

          s += matrix[l][k] ? 1 : 0;
        }
      }
      if (matrix[i][l]) s--;

      res[i][l] = s;
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
