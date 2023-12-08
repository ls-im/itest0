'use strict';

const sum = require('../lib/sum');
const assert = require('assert').strict;

assert.strictEqual(sum(), 'Hello from sum');
console.info('sum tests passed');
