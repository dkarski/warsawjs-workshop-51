const repeat = require("./repeat").default

it('should repeat the given string n times', function () {
    expect(repeat('a', 1)).toEqual('a');
    expect(repeat('a', 3)).toEqual('aaa');
});
