const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
let files = new Map();
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.
    files.set(EXT.toLowerCase(), MT)
}
let filesSent = []
for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
    filesSent.push(FNAME)
}


let res = [];
for (let i = 0; i < filesSent.length; i++) {
    let index = filesSent[i].lastIndexOf('.');
    if (index !== -1) {
        let fileType1 = filesSent[i].substring(index + 1).toLowerCase();
        if (files.has(fileType1)) {
            let answ = files.get(fileType1);
            res.push(answ);
        } else {
            res.push('UNKNOWN');
        }
    } else {
        res.push('UNKNOWN');
    }
}



console.log(res.join('\n'));
