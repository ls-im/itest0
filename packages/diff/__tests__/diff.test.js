'use strict';

const diff = require('../lib/diff');
const assert = require('assert').strict;

assert.strictEqual(diff(), 'Hello from diff');
console.info('diff tests passed');
