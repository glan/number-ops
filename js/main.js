(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

var integerToString = require('./integerToString');

document.getElementById('integerToStringForm').addEventListener('submit', function (event) {
    var value = document.getElementById('value').value,
        base = document.getElementById('base').value;

    event.preventDefault();

    try {
        document.getElementById('output').value = integerToString(value, base);
    } catch (error) {
        window.alert(error.message);
    }
});

},{"./integerToString":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndC9FcGljL1BhcnQgMi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ3QvRXBpYy9QYXJ0IDIvc3JjL2ludGVnZXJUb1N0cmluZy5qcyIsIi9Vc2Vycy9ndC9FcGljL1BhcnQgMi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIHN5bWJvbHMgZm9yIHByb3ZpZGluZyByZXByZXNlbnRhdGlvbiB1cHRvIGJhc2UgMzZcbnZhciBzeW1ib2xzID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicuc3BsaXQoJycpO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gbnVtYmVyIGlzIGFuIGludGVnZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1cbiAqIEByZXR1cm4ge2Jvb2xlYW59IGlzIGFuZCBpbnRlZ2VyXG4gKi9cbmZ1bmN0aW9uIGlzSW50KG51bSkge1xuICAgIHJldHVybiAoTnVtYmVyKG51bSkgPT09IG51bSkgJiYgKG51bSAlIDEgPT09IDApO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBudW1iZXIgdG8gYSBnaXZlbiBiYXNlXG4gKiBAcGFyYW0ge2ludH0gdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtpbnR9IG51bWJlckJhc2UgdGhlIGJhc2VcbiAqIEB0aHJvd3MgRXJyb3IgaWYgaW5wdXRzIGFyZSBpbnZhbGlkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSByZXByZXNlbnRhdGlvbiBvZiBudW1iZXIgaW4gdGhlIGdpdmVuIGJhc2VcbiAqL1xuZnVuY3Rpb24gaW50ZWdlclRvU3RyaW5nKHZhbHVlLCBudW1iZXJCYXNlKSB7XG4gICAgdmFyIGRpdjtcblxuICAgIGlmICghaXNJbnQodmFsdWUpKSB7XG4gICAgICAgIC8vIHZhbHVlIGlzIG5vdCB2YWxpZCBudW1iZXJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGlucHV0IHZhbHVlJyk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAvLyB2YWx1ZSBtdXN0IGJlIHBvc2l0aXZlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgbXVzdCBiZSBwb3NpdGl2ZScpO1xuICAgIH1cblxuICAgIGlmICghaXNJbnQobnVtYmVyQmFzZSkgfHwgbnVtYmVyQmFzZSA8IDIgfHwgbnVtYmVyQmFzZSA+IHN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIGJhc2VOdW1iZXIgaXMgbm90IHdpdGhpbiByYW5nZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jhc2UgbXVzdCBiZXR3ZWVuIDIgYW5kICcgKyBzeW1ib2xzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgZGl2ID0gTWF0aC5mbG9vcih2YWx1ZSAvIG51bWJlckJhc2UpO1xuICAgIHJldHVybiAoKGRpdiA+IDApID8gaW50ZWdlclRvU3RyaW5nKGRpdiwgbnVtYmVyQmFzZSkgOiAnJykgKyBzeW1ib2xzW3ZhbHVlICUgbnVtYmVyQmFzZV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZWdlclRvU3RyaW5nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW50ZWdlclRvU3RyaW5nID0gcmVxdWlyZSgnLi9pbnRlZ2VyVG9TdHJpbmcnKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludGVnZXJUb1N0cmluZ0Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsdWUnKS52YWx1ZSxcbiAgICAgICAgYmFzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlJykudmFsdWU7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpLnZhbHVlID0gaW50ZWdlclRvU3RyaW5nKHZhbHVlLCBiYXNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB3aW5kb3cuYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufSk7XG4iXX0=
