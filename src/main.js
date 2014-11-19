'use strict';

var parseMatrix = require('./parseMatrix'),
    clockwiseMatrix = require('./clockwiseMatrix'),
    input = document.getElementById('input'),
    output = document.getElementById('output');

document.getElementById('action').addEventListener('click', function () {
    output.innerHTML = clockwiseMatrix(parseMatrix(input.value)).join(', ');
});
