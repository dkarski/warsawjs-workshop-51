const toUnique = require("./to-unique").default

const list = [0, 0, 1, 2, 4, 5, 5, "0", "1", "4"]

test("abcde a", () => {
    expect(toUnique(list)).toEqual([0, 1, 2, 4, 5])
});
