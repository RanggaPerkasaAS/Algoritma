function reverseAlphabet(str) {
    let letters = str.match(/[a-zA-Z]+/g);
    let numbers = str.match(/\d+/g);
  
    let result = '';
  
    // Reverse huruf
    let reversedLetters = letters.map(word => {
        return word.split('').reverse().join('');
    });

    // Gabungkan huruf yang telah di-reverse dengan angka
    result = reversedLetters.join('') + (numbers ? numbers.join('') : '');

    return result;
}
  
let inputString = "NEGIE1";
let reversedString = reverseAlphabet(inputString);
console.log("Hasil =", reversedString); 