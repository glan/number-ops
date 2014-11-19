'use strict';

/**
 * Returns an array of values ordered by a clockwise spiral starting from the top right.
 * @example
 * > [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * > [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */
function clockwiseMatrix(matrix, out) {
    out = out || [];

    // return if zero rows
    if (matrix.length < 1) {
        return out;
    }

    // add top row to output
    out = out.concat(matrix.shift());

    // add last col to output
    matrix.forEach(function (row) {
        if (row.length > 0) {
            out.push(row.pop());
        }
    });

    // add bottom row to output
    var lastRow = matrix.pop() || [];
    out = out.concat(lastRow.reverse());

    // add first col to output
    var temp = [];
    matrix.forEach(function (row) {
        if (row.length > 0) {
            temp.push(row.shift());
        }
    });
    out = out.concat(temp.reverse());

    return clockwiseMatrix(matrix, out);
}

module.exports = clockwiseMatrix;
