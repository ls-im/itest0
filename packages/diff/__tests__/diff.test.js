'use strict';

const diff = require('..');
const assert = require('assert').strict;

assert.strictEqual(diff(), 'Hello from diff');
console.info('diff tests passed');
