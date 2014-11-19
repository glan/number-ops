'use strict';

var assert = require('chai').assert,
    integerToString = require('../../src/integerToString');

describe('integerToString', function () {
    describe('invalid base', function () {

        it('"x"', function (done) {
            assert.throws(integerToString.bind(null, 5, 'x'), Error,
                'Base must between 2 and 36');
            done();
        });

        it('0', function (done) {
            assert.throws(integerToString.bind(null, 5, 0), Error,
                'Base must between 2 and 36');
            done();
        });

        it('200', function (done) {
            assert.throws(integerToString.bind(null, 5, 200), Error,
                'Base must between 2 and 36');
            done();
        });

        it('-2', function (done) {
            assert.throws(integerToString.bind(null, 5, -2), Error,
                'Base must between 2 and 36');
            done();
        });

        it('3.3', function (done) {
            assert.throws(integerToString.bind(null, 5, 1.3), Error,
                'Base must between 2 and 36');
            done();
        });

        it('"2"', function (done) {
            assert.throws(integerToString.bind(null, 5, '2'), Error,
                'Base must between 2 and 36');
            done();
        });
    });

    describe('invalid input value', function () {

        it('"x"', function (done) {
            assert.throws(integerToString.bind(null, 'x', 2), Error,
                'Invalid input value');
            done();
        });

        it('-1', function (done) {
            assert.throws(integerToString.bind(null, -1, 2), Error,
                'Value must be positive');
            done();
        });

        it('1.2', function (done) {
            assert.throws(integerToString.bind(null, 1.2, 2), Error,
                'Invalid input value');
            done();
        });

        it('"5"', function (done) {
            assert.throws(integerToString.bind(null, '5', 2), Error,
                'Invalid input value');
            done();
        });
    });

    describe('transforms', function () {

        it('0 base 2 => 0', function (done) {
            assert.equal(integerToString(0, 2), '0');
            done();
        });

        it('2 base 2 => 10', function (done) {
            assert.equal(integerToString(2, 2), '10');
            done();
        });

        it('15 base 16 => F', function (done) {
            assert.equal(integerToString(15, 16), 'F');
            done();
        });

        it('255 base 16 => FF', function (done) {
            assert.equal(integerToString(255, 16), 'FF');
            done();
        });

        it('23109813835210280 base 16 => 521A40D4791E28', function (done) {
            assert.equal(integerToString(23109813835210280, 16),
                '521A40D4791E28');
            done();
        });

        it('100 base 36 => 2S', function (done) {
            assert.equal(integerToString(100, 36),
                '2S');
            done();
        });

    });

});
