const H = parseInt(readline());
const T = readline().toUpperCase();
for (let i = 0; i < H; i++) {
    const ROW = readline();
    let str = '';
    for (let i = 0; i < T.length; i++) {
        let index = (T[i].charCodeAt() - 65) * L ;
        let questionMark = ROW.substring(104 , 108);
        let sub = ROW.substring(index, index + L);
        if(!/[a-zA-Z]/.test(T[i])) {
            str += questionMark
        }
        str += sub;
    }

    console.log(str);
}