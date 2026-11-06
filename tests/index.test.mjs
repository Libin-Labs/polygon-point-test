import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('detects point inside square', () => {
  assert.equal(
    api.containsPoint(
      [
        { x: 0, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 4 },
        { x: 0, y: 4 },
      ],
      { x: 2, y: 2 },
    ),
    true,
  );
});
test('detects point outside square', () => {
  assert.equal(
    api.containsPoint(
      [
        { x: 0, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 4 },
        { x: 0, y: 4 },
      ],
      { x: 5, y: 2 },
    ),
    false,
  );
});
test('includes boundary point', () => {
  assert.equal(
    api.containsPoint(
      [
        { x: 0, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 4 },
        { x: 0, y: 4 },
      ],
      { x: 0, y: 2 },
    ),
    true,
  );
});
test('works with concave polygon', () => {
  assert.equal(
    api.containsPoint(
      [
        { x: 0, y: 0 },
        { x: 4, y: 0 },
        { x: 2, y: 2 },
        { x: 4, y: 4 },
        { x: 0, y: 4 },
      ],
      { x: 1, y: 2 },
    ),
    true,
  );
});
test('accepts reversed winding', () => {
  assert.equal(
    api.containsPoint(
      [
        { x: 0, y: 4 },
        { x: 4, y: 4 },
        { x: 4, y: 0 },
        { x: 0, y: 0 },
      ],
      { x: 2, y: 2 },
    ),
    true,
  );
});
test('rejects too few vertices', () => {
  assert.throws(
    () =>
      api.containsPoint(
        [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
        ],
        { x: 0, y: 0 },
      ),
    TypeError,
  );
});
