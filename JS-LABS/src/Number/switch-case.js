// Write a fucntion to classify student
// Receive mark as a number, output as below:
// mark > 8       ---> 'Excellence'
// 7 <= mark <= 8 ---> 'Good'
// 4 <= mark <= 6 ---> 'Not Good'
// mark < 4       ---> 'Bad'

// Cách 1
function classifyStudent(mark) {
    let result;

    switch (mark) {
        case 1:
        case 2:
        case 3: {
            result = 'Bad';
            break;
        }

        case 4:
        case 5:
        case 6: {
            result = 'Not Good';
            break;
        }

        case 7:
        case 8: {
            result = 'Good';
            break;
        }

        case 9:
        case 10: {
            result = 'Excellence';
            break;
        }

        default: {
            result = 'Invaid mark!';
        }
    }

    return result;
}

console.log(classifyStudent(12));
console.log(classifyStudent(9));
console.log(classifyStudent(7));
console.log(classifyStudent(5));
console.log(classifyStudent(3));

/*------------------------------------------------------------------------------------------------------------------ */

// A list of error codes from server
// E01: Invalid username or password
// E02: Too many attempts
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCode and return the according message

// Cách 1
function getErrorMessage(errorCode) {
    let message = '';

    switch (errorCode) {
        case 'E01': {
            message = 'Invalid username or password';
            break;
        }

        case 'E02': {
            message = 'Too many attempts';
            break;
        }

        case 'E03': {
            message = 'Missing data';
            break;
        }

        default: {
            message = 'Something went wrong';
        }
    }

    return message;
}

// Cách 2
function getErrorMessage(errorCode) {
    const errorMap = {
        E01: 'Invalid username or password',
        E02: 'Too many attempts',
        E03: 'Missing data',
    };

    return errorMap[errorCode] || 'Something went wrong';
}
console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E04'));
