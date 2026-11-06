import * as api from '@lp-labs/polygon-point-test';
import { containsPoint } from '@lp-labs/polygon-point-test';
console.log(
  containsPoint(
    [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 4 },
      { x: 0, y: 4 },
    ],
    { x: 2, y: 2 },
  ),
);
// @ts-expect-error invalid argument must be rejected by declarations
api.containsPoint('ring', { x: 0, y: 0 });
