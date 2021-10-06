// Write a function to check if a number a positive even number
// If yes, return true. Otherwise return false.

// flag (kỹ thuật đặt cờ hiệu)
// function isPositiveEvenNumber(n) {
//     let isValid;

//     if (n > 0 && n % 2 === 0) {
//         isValid = true;
//     } else {
//         isValid = false;
//     }

//     return isValid;
// }

// // Cách 2
// function isPositiveEvenNumber(n) {
//     let isValid = false;

//     if (n > 0 && n % 2 === 0) {
//         isValid = true;
//     }

//     return isValid;
// }

// // Cách 3
// function isPositiveEvenNumber(n) {
//     if (n > 0 && n % 2 === 0) {
//         return true;
//     }

//     return false;
// }

// // Cách 4
// function isPositiveEvenNumber(n) {
//     return n > 0 && n % 2 === 0;
// }

// /*------------------------------------------------------------------------------------------------------------------ */

// // Write a fucntion to classify student
// // Receive mark as a number, output as below:
// // mark > 8       ---> 'Excellence'
// // 7 <= mark <= 8 ---> 'Good'
// // 4 <= mark <= 6 ---> 'Not Good'
// // mark < 4       ---> 'Bad'

// // Cách 1
// function classifyStudent(mark) {
//     let result;

//     if (mark > 8) result = 'Excellence';
//     else if (mark >= 7) result = 'Good';
//     else if (mark >= 4) result = 'Not Good';
//     else result = 'Bad';

//     return result;
// }

// // Cách 2
// function classifyStudent(mark) {
//     // Validate arguments
//     // mark should be in range of [0, 10]
//     if (mark < 0 || mark > 10) return '';

//     let result = 'Bad';

//     if (mark > 8) result = 'Excellence';
//     else if (mark >= 7) result = 'Good';
//     else if (mark >= 4) result = 'Not Good';

//     return result;
// }

// Cách 3 use if...return
export function classifyStudentV3(mark) {
    // Validate arguments
    // mark should be in range of [0, 10]
    if (mark < 0 || mark > 10) return 'Invalid mark!';

    if (mark > 8) return 'Excellence';
    if (mark >= 7) return 'Good';
    if (mark >= 4) return 'Not Good';

    return 'Bad';
}
// console.log(classifyStudent(12));
// console.log(classifyStudent(9));
// console.log(classifyStudent(7));
// console.log(classifyStudent(5));
// console.log(classifyStudent(3));

/*------------------------------------------------------------------------------------------------------------------ */
