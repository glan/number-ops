'use strict';

var assert = require('chai').assert,
    clockwiseMatrix = require('../../src/clockwiseMatrix');

describe('clockwiseMatrix', function () {

    it('1', function (done) {
        assert.deepEqual(clockwiseMatrix([1]), [1]);
        done();
    });

    it('1 x 1', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1]
        ]), [1]);
        done();
    });

    it('1 x 2', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1],
            [2]
        ]), [1, 2]);
        done();
    });

    it('2 x 1', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1, 2]
        ]), [1, 2]);
        done();
    });

    it('2 x 2', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1, 2],
            [3, 4]
        ]), [1, 2, 4, 3]);
        done();
    });

    it('3 x 3', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
        done();
    });

    it('4 x 4', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ]), [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
        done();
    });

    it('irregular [[1, 2],[3]]', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1, 2],
            [3]
        ]), [1, 2, 3]);
        done();
    });

    it('irregular [[1],[]]', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1],
            []
        ]), [1]);
        done();
    });

    it('irregular [[1, 2],[3, 4],[5]]', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1, 2],
            [3, 4],
            [5]
        ]), [1, 2, 4, 5, 3]);
        done();
    });

    it('irregular [[1, 2, 3],[4, 5],[6]]', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1, 2, 3],
            [4, 5],
            [6]
        ]), [1, 2, 3, 5, 6, 4]);
        done();
    });

    it('irregular [[1, 2, 3],[4, 5],[6]]', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1],
            [2, 3],
            [4, 5, 6]
        ]), [1, 3, 6, 5, 4, 2]);
        done();
    });

    it('irregular [[1, 2, 3],[4],[5, 6, 7]]', function (done) {
        assert.deepEqual(clockwiseMatrix([
            [1, 2, 3],
            [4],
            [5, 6, 7]
        ]), [1, 2, 3, 4, 7, 6, 5]);
        done();
    });
});
