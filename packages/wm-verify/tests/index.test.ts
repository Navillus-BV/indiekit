import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { helloWorld } from '../src';

test('exports a function', () => {
  assert.type(helloWorld, 'function');
});

test.run();
