const toUnique = (list) =>
    list.filter((value, index, array) => array.indexOf(value) === index)

module.exports.default = toUnique
