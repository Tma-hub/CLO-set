import data from '../../api/data.json';

const vrchniDily = ['halenka', 'kosile', 'svetry', 'topy', 'triko'];
const spodniDily = ['kalhoty', 'kratasy', 'sukne'];
const svrchniDily = ['kabat', 'sako', 'bunda'];
const saty = ['saty'];

export const getData = () => {
  return data;
};

const compareData = (item, example) => {
  for (const key in example) {
    const itemValue = item[key];
    const exampleValue = example[key];
    if (Array.isArray(itemValue)) {
      if (Array.isArray(exampleValue)) {
        return itemValue.some(
          (itemValueItem) => exampleValue.indexOf(itemValueItem) >= 0,
        );
      } else {
        return itemValue.indexOf(exampleValue) >= 0;
      }
    }
    if (Array.isArray(exampleValue)) {
      return exampleValue.indexOf(itemValue) >= 0;
    }
    if (itemValue !== exampleValue) {
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

const matchArray = (userSelection, candidate, comparator) => {
  let result = false;

  if (!userSelection || !candidate) return false; // OŠETŘENÍ PROTI null

  userSelection.forEach((userSelectionItem) => {
    candidate.forEach((candidateItem) => {
      const singleResult = comparator(userSelectionItem, candidateItem);
      if (typeof singleResult === 'number') {
        if (typeof result === 'number') {
          result = Math.max(result, singleResult);
        } else {
          result = singleResult;
        }
      } else if (typeof result !== 'number') {
        result = result || singleResult;
      }
    });
  });
  return result;
};

const matchPairs = (userSelection, candidate, pairs) => {
  return pairs.some(
    (pair) =>
      (pair[0] === userSelection && pair[1] === candidate) ||
      (pair[1] === userSelection && pair[0] === candidate),
  );
};

export const matchTyp = (userSelection, candidate) => {
  if (vrchniDily.indexOf(userSelection.typ) >= 0) {
    return spodniDily.indexOf(candidate.typ) >= 0;
  }
  if (spodniDily.indexOf(userSelection.typ) >= 0) {
    return vrchniDily.indexOf(candidate.typ) >= 0;
  }
  if (svrchniDily.indexOf(userSelection.typ) >= 0) {
    return saty.indexOf(candidate.typ) >= 0;
  }
  if (saty.indexOf(userSelection.typ) >= 0) {
    return svrchniDily.indexOf(candidate.typ) >= 0;
  }
  return false;
};

export const matchBarva = (userSelection, candidate) => {
  return true;
};

const matchStylSingle = (userSelectionStyl, candidateStyl) => {
  if (userSelectionStyl === candidateStyl) {
    return 2;
  }
  if (userSelectionStyl === 'casual' || candidateStyl === 'casual') {
    return 1;
  }
  return false;
};

export const matchStyl = (userSelection, candidate) => {
  return matchArray(userSelection.styl, candidate.styl, matchStylSingle);
};

const matchSezonaSingle = (userSelectionSezona, candidateSezona) => {
  if (userSelectionSezona === candidateSezona) {
    return 2;
  }
  if (
    matchPairs(userSelectionSezona, candidateSezona, [
      ['jaro', 'leto'],
      ['leto', 'podzim'],
      ['podzim', 'zima'],
    ])
  ) {
    return 1;
  }
  return false;
};

export const matchSezona = (userSelection, candidate) => {
  return matchArray(userSelection.sezona, candidate.sezona, matchSezonaSingle);
};

/*
 * Seznam porovnavacich funkci vyhodnocujicich vhodnost parovani kusu obleceni.
 * Funkce vraci:
 * - false, pokud se k sobe dva kusy vubec nemaji parovat (napr. dve halenky).
 * - true, pokud se k sobe dva kusy hodi a neni potreba rozlisovat miru vhodnosti
 * - cislo oznacujici vhodnost kombinace, cim vetsi tim lepsi
 */
const matchers = [matchTyp, matchStyl, matchSezona, matchBarva];

/**
 * Porovná dva kusy oblečení podle toho, jaká je u nich ulozena vhodnost (property match).
 */
const matchComparator = (a, b) => {
  return a.match - b.match;
};

/**
 * Vrátí seznam kusů oblečení, které se hodí k `userSelection`, seřazené podle vhodnosti.
 */
export const select = (userSelection) => {
  let data = getData().map((item) => Object.assign(item));
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
