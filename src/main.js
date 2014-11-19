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
