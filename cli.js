#!/usr/bin/env node
'use strict';
var meow = require('meow');
var superb = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ congrats',
		'  great job',
		'',
		'  $ congrats --all',
		'  ace',
		'  amazing',
		'  ...',
		'',
		'Options',
		'  --all  Get all the phrases instead of a random phrase'
	]
});

console.log(cli.flags.all ? superb.phrases.join('\n') : superb());
