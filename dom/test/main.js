// load dependencies
var fs = require('fs');
var assert = require('assert');
var jsdom = require('jsdom');

// load module under test
var logic_one = fs.readFileSync('logic_one.js');
var logic_two = fs.readFileSync('logic_two.js');
var web = fs.readFileSync('web.js');

describe('my web module', function() {

    describe('display', function() {

        var window;

        beforeEach(function(done) {
            var html = fs.readFileSync(process.cwd() + '/test/fixture/index.html');

            jsdom.env({
                html: html,
                src: [logic_one, logic_two, web],
                done: function (err, win) {
                    window = win;
                    done(err);
                }
            });
        });

        describe('before showResult() is called', function() {
            var result;

            beforeEach(function() {
                resultElement = window.document.getElementById('result');
                result = resultElement.innerHTML;
            });

            it('should say "none" in the result display', function() {
                assert.equal(result, 'none');
            });
        });

        describe('when showResult() is called', function() {
            var result;

            beforeEach(function() {
                window.showResult(2, 3, 3);
                resultElement = window.document.getElementById('result');
                result = resultElement.innerHTML;
            });

            it('should sum and multiply three numbers and display the result', function() {
                assert.equal(result, 15);
            });
        });
    });

});
