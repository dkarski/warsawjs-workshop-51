const repeat = (value, count = 0) => {
    let str
    for (let index = 0; index < count; index++) str += value
    return str
}

module.exports.default = repeat
