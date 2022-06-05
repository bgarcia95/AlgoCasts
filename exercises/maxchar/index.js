// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// My own solution
// function maxChar(str) {
//     const chars = {};

//     for (let char of str) {
//         chars[char] = chars[char] + 1 || 1;
//     }

//     const charsToArr = Object.values(chars);

//     const maxValueChar = Math.max(...charsToArr);

//     for (const char in chars) {
//         if (chars[char] === maxValueChar) {
//             return char;
//         }
//     }

// }

// Stephen's solution
function maxChar(str) {
    const chars = {};
    let maxValue = 0;
    let maxChar = '';

    for (let char of str) {
        if (chars[char]) {
            chars[char]++;
        } else {
            chars[char] = 1;
        }
    }

    // Looping through object, char in this case it will be the 'key' of that object property 
    for (let char in chars) {
        if (chars[char] > maxValue) {
            maxValue = chars[char];
            maxChar = char;
        }
    }

    return maxChar;

}



module.exports = maxChar;
