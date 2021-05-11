import palindrom from "./palindrom";

test("should  be true", () => {
  expect(palindrom("kodok")).toBe(true);
  expect(palindrom("pixip")).toBe(true);
  expect(palindrom("ili")).toBe(true);
  expect(palindrom("a")).toBe(true);
  expect(palindrom("")).toBe(true);
});

test("should  be false", () => {
  expect(palindrom("bayi")).toBe(false);
  expect(palindrom("minum")).toBe(false);
  expect(palindrom("susu")).toBe(false);
});
