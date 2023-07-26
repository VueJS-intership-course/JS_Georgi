const MESSAGE = readline();
let res = MESSAGE;
let binary = '';
let binaryChars = [];
let count = 0;
let encodedMsg = [];
let j = 0;

for (let i = 0; i < res.length; i++) {
    let letter = res[i];
    let charNum = letter.charCodeAt();
    binary = turnIntoBinary(charNum);
    for (let i = 0; i < binary.length; i++) {
        let number = parseInt(binary.charAt(i));
        binaryChars[count] = number;
        count++;
    }
}

while (j < count) {
    if (binaryChars[j] === 1) {
        encodedMsg[j] = j === 0 ? '0 0' : ' 0 0';
        j++;
        while (binaryChars[j] === 1) {
            encodedMsg[j] = '0';
            j++;
        }
    } else if (binaryChars[j] === 0) {
        encodedMsg[j] = j === 0 ? '00 0' : ' 00 0';
        j++;
        while (binaryChars[j] === 0) {
            encodedMsg[j] = '0';
            j++;
        }
    }
}

function turnIntoBinary(n) {
    let turned = Number(n).toString(2);
    let binary = turned.padStart(7, '0');

    return binary
}

console.log(encodedMsg.join(''));