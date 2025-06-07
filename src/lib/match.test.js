import { expect, test } from 'vitest';
import { select, matchType, findData, filterData } from './match.js';

test('matchType', () => {
  expect(
    matchType(findData({ typ: 'halenka' }), findData({ typ: 'kalhoty' })),
  ).toBeTruthy();
  expect(
    matchType(findData({ typ: 'halenka' }), findData({ typ: 'halenka' })),
  ).toBeFalsy();
  expect(
    matchType(findData({ typ: 'halenka' }), findData({ typ: 'kabat' })),
  ).toBeFalsy();
  expect(
    matchType(findData({ typ: 'halenka' }), findData({ typ: 'trika' })),
  ).toBeFalsy();
});

test('Co se páruje s id=14', () => {
  const result = select(findData({ id: 14 }));
  //console.log(result);
  expect(result.length).toBe(45);
});
