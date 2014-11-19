'use strict';

/**
 * Convert a string representation of a matrix into a 2 dimensional array
 * @param {string} matrixString
 * @returns {array} 2 dimensional array
 * @example
 * > "[1, 2, 3]
 *    [4, 5, 6]"
 * > [["1", "2", "3"], ["4", "5", "6"]]
 */
function parseMatrix(matrixString) {
    var rows = matrixString.split('\n'),
        matrix = [];
    rows.forEach(function (row) {
        row = /.*\[(.+)\].*/.exec(row);
        if (row && row[1]) {
            matrix.push(row[1].split(/\s*,\s*/));
        }
    });
    return matrix;
}

module.exports = parseMatrix;
