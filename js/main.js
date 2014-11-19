(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

var parseMatrix = require('./parseMatrix'),
    clockwiseMatrix = require('./clockwiseMatrix'),
    input = document.getElementById('input'),
    output = document.getElementById('output');

document.getElementById('action').addEventListener('click', function () {
    output.innerHTML = clockwiseMatrix(parseMatrix(input.value)).join(', ');
});

},{"./clockwiseMatrix":1,"./parseMatrix":3}],3:[function(require,module,exports){
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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndC9FcGljL1BhcnQgMy9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ3QvRXBpYy9QYXJ0IDMvc3JjL2Nsb2Nrd2lzZU1hdHJpeC5qcyIsIi9Vc2Vycy9ndC9FcGljL1BhcnQgMy9zcmMvbWFpbi5qcyIsIi9Vc2Vycy9ndC9FcGljL1BhcnQgMy9zcmMvcGFyc2VNYXRyaXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbHVlcyBvcmRlcmVkIGJ5IGEgY2xvY2t3aXNlIHNwaXJhbCBzdGFydGluZyBmcm9tIHRoZSB0b3AgcmlnaHQuXG4gKiBAZXhhbXBsZVxuICogPiBbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3LCA4LCA5XV1cbiAqID4gWzEsIDIsIDMsIDYsIDksIDgsIDcsIDQsIDVdXG4gKi9cbmZ1bmN0aW9uIGNsb2Nrd2lzZU1hdHJpeChtYXRyaXgsIG91dCkge1xuICAgIG91dCA9IG91dCB8fCBbXTtcblxuICAgIC8vIHJldHVybiBpZiB6ZXJvIHJvd3NcbiAgICBpZiAobWF0cml4Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICAvLyBhZGQgdG9wIHJvdyB0byBvdXRwdXRcbiAgICBvdXQgPSBvdXQuY29uY2F0KG1hdHJpeC5zaGlmdCgpKTtcblxuICAgIC8vIGFkZCBsYXN0IGNvbCB0byBvdXRwdXRcbiAgICBtYXRyaXguZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIGlmIChyb3cubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgb3V0LnB1c2gocm93LnBvcCgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYWRkIGJvdHRvbSByb3cgdG8gb3V0cHV0XG4gICAgdmFyIGxhc3RSb3cgPSBtYXRyaXgucG9wKCkgfHwgW107XG4gICAgb3V0ID0gb3V0LmNvbmNhdChsYXN0Um93LnJldmVyc2UoKSk7XG5cbiAgICAvLyBhZGQgZmlyc3QgY29sIHRvIG91dHB1dFxuICAgIHZhciB0ZW1wID0gW107XG4gICAgbWF0cml4LmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICBpZiAocm93Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRlbXAucHVzaChyb3cuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBvdXQgPSBvdXQuY29uY2F0KHRlbXAucmV2ZXJzZSgpKTtcblxuICAgIHJldHVybiBjbG9ja3dpc2VNYXRyaXgobWF0cml4LCBvdXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb2Nrd2lzZU1hdHJpeDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHBhcnNlTWF0cml4ID0gcmVxdWlyZSgnLi9wYXJzZU1hdHJpeCcpLFxuICAgIGNsb2Nrd2lzZU1hdHJpeCA9IHJlcXVpcmUoJy4vY2xvY2t3aXNlTWF0cml4JyksXG4gICAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKSxcbiAgICBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jyk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBvdXRwdXQuaW5uZXJIVE1MID0gY2xvY2t3aXNlTWF0cml4KHBhcnNlTWF0cml4KGlucHV0LnZhbHVlKSkuam9pbignLCAnKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXRyaXggaW50byBhIDIgZGltZW5zaW9uYWwgYXJyYXlcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXRyaXhTdHJpbmdcbiAqIEByZXR1cm5zIHthcnJheX0gMiBkaW1lbnNpb25hbCBhcnJheVxuICogQGV4YW1wbGVcbiAqID4gXCJbMSwgMiwgM11cbiAqICAgIFs0LCA1LCA2XVwiXG4gKiA+IFtbXCIxXCIsIFwiMlwiLCBcIjNcIl0sIFtcIjRcIiwgXCI1XCIsIFwiNlwiXV1cbiAqL1xuZnVuY3Rpb24gcGFyc2VNYXRyaXgobWF0cml4U3RyaW5nKSB7XG4gICAgdmFyIHJvd3MgPSBtYXRyaXhTdHJpbmcuc3BsaXQoJ1xcbicpLFxuICAgICAgICBtYXRyaXggPSBbXTtcbiAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICByb3cgPSAvLipcXFsoLispXFxdLiovLmV4ZWMocm93KTtcbiAgICAgICAgaWYgKHJvdyAmJiByb3dbMV0pIHtcbiAgICAgICAgICAgIG1hdHJpeC5wdXNoKHJvd1sxXS5zcGxpdCgvXFxzKixcXHMqLykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdHJpeDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZU1hdHJpeDtcbiJdfQ==
