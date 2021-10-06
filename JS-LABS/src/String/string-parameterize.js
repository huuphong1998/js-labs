// String
// Write a Javascript function to parameterize a string.
// Eg: parameterize('Code JS Is Fun') --> 'code-js-is-fun'
// toLowerCase()
// c1: replaceAll()
// c2: split and join

function parameterize(str) {
    // const lowerCaseStr = str.toLowerCase();
    // return str.toLowerCase().replaceAll(' ', '-');

    return str.toLowerCase().split(' ').join('-');
}
console.log(parameterize('Code JS Is Fun'));
