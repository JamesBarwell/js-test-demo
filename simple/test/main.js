// load dependencies
var fs = require('fs');
var assert = require('assert');

// load module under test
eval(fs.readFileSync('logic_one.js') + '');
eval(fs.readFileSync('logic_two.js') + '');

describe('logic_one module', function() {

    describe('sum()', function() {
        var result

        beforeEach(function() {
            result = sum(2, 3);
        });

        it('should sum two numbers', function() {
            assert.equal(result, 5);
        });
    });

    describe('multiply()', function() {
        var result

        beforeEach(function() {
            result = multiply(2, 3);
        });

        it('should multiply two numbers', function() {
            assert.equal(result, 6);
        });
    });

});

describe('logic_two module', function() {

    describe('sum_and_multiply()', function() {
        var result

        beforeEach(function() {
            result = sum_and_multiply(2, 3, 3)
        });

        it('should sum and multiply three numbers', function() {
            assert.equal(result, 15);
        });
    });

});
