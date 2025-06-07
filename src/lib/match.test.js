import { expect, test } from 'vitest';
import {
  select,
  matchTyp,
  matchStyl,
  getData,
  findData,
  filterData,
} from './match.js';

/*
getData().forEach((item) => {
  test(`id=${item.id} má typ`, () => {
    expect(item).toHaveProperty('typ');
  });
  test(`id=${item.id} má styl`, () => {
    expect(item).toHaveProperty('styl');
  });
});
*/

test('matchTyp', () => {
  expect(
    matchTyp(findData({ typ: 'halenka' }), findData({ typ: 'kalhoty' })),
  ).toBeTruthy();
  expect(
    matchTyp(findData({ typ: 'halenka' }), findData({ typ: 'halenka' })),
  ).toBeFalsy();
  expect(
    matchTyp(findData({ typ: 'halenka' }), findData({ typ: 'kabat' })),
  ).toBeFalsy();
  expect(
    matchTyp(findData({ typ: 'halenka' }), findData({ typ: 'trika' })),
  ).toBeFalsy();
});

test('matchStyl', () => {
  expect(
    matchStyl(findData({ styl: 'casual' }), findData({ styl: 'casual' })),
  ).toBe(2);
  expect(
    matchStyl(findData({ styl: 'sportovni' }), findData({ styl: 'sportovni' })),
  ).toBe(2);
  expect(
    matchStyl(findData({ styl: 'casual' }), findData({ styl: 'sportovni' })),
  ).toBe(1);
  expect(
    matchStyl(findData({ styl: 'sportovni' }), findData({ styl: 'formalni' })),
  ).toBeFalsy();
});

test('Co se páruje s id=14', () => {
  const result = select(findData({ id: 14 }));
  //console.log(result);
  expect(result.length).toBe(45);
});

test('Co se páruje s id=71', () => {
  const result = select(findData({ id: 71 }));
  //console.log(result);
  expect(result.length).toBe(79);
});
