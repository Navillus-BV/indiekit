import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { helloUtils } from '../src';

test('exports a function', () => {
  assert.type(helloUtils, 'function');
});

test.run();
