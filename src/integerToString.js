'use strict';

// symbols for providing representation upto base 36
var symbols = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/**
 * Check if a given number is an integer
 * @param {number} num
 * @return {boolean} is and integer
 */
function isInt(num) {
    return (Number(num) === num) && (num % 1 === 0);
}

/**
 * Convert a number to a given base
 * @param {int} value to convert
 * @param {int} numberBase the base
 * @throws Error if inputs are invalid
 * @returns {string} representation of number in the given base
 */
function integerToString(value, numberBase) {
    var div;

    if (!isInt(value)) {
        // value is not valid number
        throw new Error('Invalid input value');
    }

    if (value < 0) {
        // value must be positive
        throw new Error('Value must be positive');
    }

    if (!isInt(numberBase) || numberBase < 2 || numberBase > symbols.length) {
        // baseNumber is not within range
        throw new Error('Base must between 2 and ' + symbols.length);
    }

    div = Math.floor(value / numberBase);
    return ((div > 0) ? integerToString(div, numberBase) : '') + symbols[value % numberBase];
}

module.exports = integerToString;
