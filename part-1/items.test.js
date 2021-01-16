const items = ["b", "c", "d"]

test("Push returns the new length of the array correctly", () => {
  expect(items.push("e")).toEqual(4)
  expect(items).toEqual(["b", "c", "d", "e"])
});

test("Unshift returns the new length of the array correctly", () => {
  expect(items.unshift("a")).toEqual(4)
  expect(items).toEqual(["a", "b", "c", "d"])
});
