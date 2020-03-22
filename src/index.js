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
    '-----': '0',
};

function decode(expr) {
    const encoded = {
        '10': '.',
        '11': '-',
        '00': '',
        '**********':''
    }
    let code = expr.split(/(\d{10})/g).filter(a => a != "");
    let words = [];
    
    for (let i = 0; i < code.length; i++) {
        let arr = code[i].split(/(\d{2})/g).filter(a => a != "");
        let letters=[];
        for (j = 0; j < arr.length; j++) { 
            letters.push(encoded[arr[j]]);
        }
        words[i] = letters.join("") == '' ? " ": MORSE_TABLE[letters.join("")];
    }
    return words.join("");
}

module.exports = {
    decode
}