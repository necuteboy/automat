fs = require('fs');
arg = process.argv;
let uninput = arg[2];
let ans = [];
let input = fs.readFileSync(arg[3]).toString();
let m = input.length;
let alph = new Array();
for (i = 0; i < m; i++)
    alph[uninput.charAt(i)] = 0;
del = new Array(m + 1)

for (j = 0; j <= m; j++)
    del[j] = new Array();

for (i in alph)
    del[0][i] = 0;

for (j = 0; j < m; j++) {
    prev = del[j][uninput.charAt(j)]
    del[j][uninput.charAt(j)] = j + 1;
    for (i in alph)
        del[j + 1][i] = del[prev][i]
}
for (j = 0; j <= m; j++) {
    let out = '';
    for (i in alph)
        out += del[j][i] + ' ';
    console.log(out)
}
let cm = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] in alph)
        cm = del[cm][input[i]];
    else {
        cm = 0;
    }
    if (cm == uninput.length)
        ans.push(i-uninput.length+1);
}
console.log(ans);