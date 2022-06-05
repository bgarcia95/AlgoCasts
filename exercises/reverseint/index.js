// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    const reversedStringNumber = n.toString().split('').reverse().join('');

    // Math.sign: Un número representando el signo del argumento dado. Si el argumento es un número positivo, negativo, cero positivo, o cero negativo, la función retornará 1, -1, 0 or -0 respectivamente. De lo contrario, retorna NaN.
    // In this line Math.sign tell us if the passed number will be positive or negative
    return parseInt(reversedStringNumber) * Math.sign(n);
}

module.exports = reverseInt;
