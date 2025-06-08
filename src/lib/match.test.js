import { expect, test, describe, onTestFailed } from "vitest";
import {
  select,
  matchTyp,
  matchStyl,
  matchSezona,
  getData,
  findData,
  filterData,
} from "./match.js";

describe("Testování validity dat", () => {
  const testDataItemHasProperties = (item, properties) => {
    properties.forEach((property) => {
      test(`id=${item.id} má property ${property}'`, () => {
        expect(item).toHaveProperty(property);
      });
    });
  };

  getData().forEach((item) =>
    testDataItemHasProperties(item, [
      "typ",
      "barva",
      "odstin",
      "vzor",
      "material",
      "styl",
      "sezona",
      "delka",
      "strih",
    ])
  );
});

describe("Testování matcherů", () => {
  const testSingleMatcherItem = (
    matcher,
    userSelection,
    candidate,
    expectedResult
  ) => {
    const userSelectionText = JSON.stringify(userSelection);
    const candidateText = JSON.stringify(candidate);
    const userSelectedItem = findData(userSelection);
    const candidateItem = findData(candidate);

    describe(`${userSelectionText} × ${candidateText}`, () => {
      test(`Find userSelectedItem: ${userSelectionText}`, () => {
        expect(userSelectedItem).toBeDefined();
      });

      test(`Find candidateItem: ${candidateText}`, () => {
        expect(userSelectedItem).toBeDefined();
      });

      test(`Match ${userSelectedItem.id} × ${candidateItem.id}`, () => {
        expect(matcher(userSelectedItem, candidateItem)).toEqual(
          expectedResult
        );
      });
    });
  };

  const testSingleMatcher = (matcher, testCases) => {
    describe(`${matcher.name}()`, () => {
      testCases.forEach(([userSelection, candidate, expectedResult]) => {
        testSingleMatcherItem(
          matcher,
          userSelection,
          candidate,
          expectedResult
        );
      });
    });
  };

  testSingleMatcher(matchTyp, [
    [{ typ: "halenka" }, { typ: "kalhoty" }, true],
    [{ typ: "halenka" }, { typ: "halenka" }, false],
    [{ typ: "halenka" }, { typ: "kabat" }, false],
    [{ typ: "halenka" }, { typ: "trika" }, false],
  ]);

  testSingleMatcher(matchStyl, [
    [{ styl: "casual" }, { styl: "casual" }, 2],
    [{ styl: "sportovni" }, { styl: "sportovni" }, 2],
    [{ styl: "casual" }, { styl: "sportovni" }, 1],
    [{ styl: "sportovni" }, { styl: "formalni" }, false],
  ]);

  testSingleMatcher(matchSezona, [
    [{ id: 67, sezona: "leto" }, { id: 66, sezona: "leto" }, 2],
    [{ id: 1, sezona: "zima" }, { id: 10, sezona: "zima" }, 2],
    [{ id: 4, sezona: ["jaro", "podzim"] }, { id: 66, sezona: "leto" }, 1],
    [{ id: 9, sezona: "jaro" }, { id: 66, sezona: "leto" }, 1],
    [{ id: 9, sezona: "jaro" }, { id: 1, sezona: "zima" }, false],
    [{ id: 1, sezona: "zima" }, { id: 66, sezona: "leto" }, false],
  ]);
});

describe("Testování komplexního párování", () => {
  test("Co se páruje s id=14", () => {
    const result = select(findData({ id: 14 }));
    //console.log(result);
    expect(result.length).toBe(45);
  });

  test("Co se páruje s id=71", () => {
    const result = select(findData({ id: 71 }));
    //console.log(result);
    expect(result.length).toBe(79);
  });
});
