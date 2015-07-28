'use strict';
var test = require('ava');
var superb = require('./');

test('returns a random congrats phrase', function (t) {
	t.assert(superb().length > 0);
});

test('returns all the phrases', function (t) {
	t.assert(Array.isArray(superb.phrases));
	t.assert(superb.phrases[3].length > 0);
});
