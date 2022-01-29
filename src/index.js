const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    " ": " "
};

function decode(expr) {
  let resultStr = "";
  let resultDotDashesArr = [];
  let index = -1;
  for (let i = 0; i < expr.length; i += 10) {
    index += 1;
    resultDotDashesArr[index] = '';
    if (expr[i] === "*") {
      resultDotDashesArr[index] = ` `;
      continue;
    }
    for (let j = 0; j < 10; j += 2) {
      if (expr[i + j] !== "0") {
        expr[i + j + 1] === "0"
          ? (resultDotDashesArr[index] = `${resultDotDashesArr[index]}.`)
          : (resultDotDashesArr[index] = `${resultDotDashesArr[index]}-`);
      }
    }
  }
  for (let item of resultDotDashesArr) {
    resultStr = `${resultStr}${MORSE_TABLE[item]}`;
  }
  return resultStr;
}

module.exports = {
    decode
}