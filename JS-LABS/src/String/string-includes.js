// String exercise
// Check if a string contains an email address with `@gmail.com` or not
// indexOf()
// lastIndexOf()
// includes

function hasEmail(str) {
    return str.includes('@gmail.com');
    // return str.indexOf('@gmail.com') >= 0;
    // return str.lastIndexOf('@gmail.com') >= 0;
}
console.log(hasEmail('nghuuphong@gmail.com'));
console.log(hasEmail('nghuuphong'));
