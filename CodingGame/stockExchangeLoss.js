/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const v = parseInt(inputs[i]);
}

let maxLoss = 0;
let currentMax = inputs[0];

for (let i = 1; i < inputs.length; i++) {
    const currentPrice = inputs[i];
    maxLoss = Math.min(maxLoss, currentPrice - currentMax);
    currentMax = Math.max(currentMax, currentPrice);
}

console.log(maxLoss);


//console.log(parseInt(min))
// Write an answer using console.log()
// To debug: console.error('Debug messages...');


//console.log('answer');
