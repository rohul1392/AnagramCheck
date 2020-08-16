const { isAnagram } = require("./anagrams");

test("Check are Anagrams", () => {
  expect(isAnagram("bleat", "table")).toBe(true);
});

test("Check not Anagrams", () => {
  expect(isAnagram("eat", "tar")).toBe(false);
});
