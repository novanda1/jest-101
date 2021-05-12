import palindrom from "./palindrom";

test("should be true", () => {
  expect(palindrom({ text: "eye" })).toBe(true);
  expect(palindrom({ text: "eve" })).toBe(true);
  expect(palindrom({ text: "num" })).toBe(true);
  expect(palindrom({ text: "mom" })).toBe(true);
  expect(palindrom({ text: "hannah" })).toBe(true);
});

test("should be false", () => {
  expect(palindrom({ text: "ear" })).toBe(false);
  expect(palindrom({ text: "adam" })).toBe(false);
  expect(palindrom({ text: "string" })).toBe(false);
  expect(palindrom({ text: "mommy" })).toBe(false);
  expect(palindrom({ text: "fatimah" })).toBe(false);
});
