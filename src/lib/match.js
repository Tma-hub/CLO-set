import data from '../../api/data.json';

const vrchniDily = ['halenka', 'kosile', 'saty', 'svetry', 'topy', 'trika'];
const spodniDily = ['kalhoty', 'kratasy', 'sukne'];
const svrchniDily = ['kabat', 'sako', 'bunda'];

export const getData = () => {
  return data;
};

const compareData = (item, example) => {
  for (const key in example) {
    if (item[key] !== example[key]) {
      return false;
    }
  }
  return true;
};

const comparator = (example) => {
  return (item) => compareData(item, example);
};

export const findData = (example) => {
  return data.find(comparator(example));
};

export const filterData = (example) => {
  return data.filter(comparator(example));
};

export const matchType = (userSelection, candidate) => {
  if (vrchniDily.indexOf(userSelection.typ) >= 0) {
    return spodniDily.indexOf(candidate.typ) >= 0;
  }
  if (spodniDily.indexOf(userSelection.typ) >= 0) {
    return vrchniDily.indexOf(candidate.typ) >= 0;
  }
  return false;
};

const matchers = [matchType];

/**
 * Porovná dva kusy oblečení podle toho, jaká je u nich zaznamenaná vhodnost (match).
 */
const matchComparator = (a, b) => {
  return a.match - b.match;
};

/**
 * Vrátí seznam kusů oblečení, které se hodí k `userSelection`, seřazené podle vhodnosti.
 */
export const select = (userSelection) => {
  let data = Array.from(getData());
  data.forEach((item) => (item.match = 0));

  matchers.forEach((matcher) => {
    const newData = [];
    data.forEach((item) => {
      const result = matcher(userSelection, item);
      if (result === false) {
        return;
      }
      if (typeof result === 'number') {
        item.match += result;
      }
      newData.push(item);
    });
    data = newData;
  });
  data.sort(matchComparator);
  return data;
};
