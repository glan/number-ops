'use strict';

var assert = require('chai').assert,
    parseMatrix = require('../../src/parseMatrix');

describe('parseMatrix', function () {
    it('"[]"', function (done) {
        var matrix = parseMatrix('[]');
        assert.deepEqual(matrix, []);
        done();
    });

    it('" [1, 2] "', function (done) {
        var matrix = parseMatrix(' [1, 2] ');
        assert.deepEqual(matrix, [
            ['1', '2']
        ]);
        done();
    });

    it('"[1, 2]\n[3, 4]"', function (done) {
        var matrix = parseMatrix('[1, 2]\n[3, 4]');
        assert.deepEqual(matrix, [
            ['1', '2'],
            ['3', '4']
        ]);
        done();
    });
});
