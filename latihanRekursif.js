function rec(angka) {
    var str = '';
    // if ini adalah kondisi best case atau kondisi dimana looping rekursif berhenti
    if (angka == 0) {
        return str;
    } else {
        str += angka + ' ';
        return str + rec(angka - 1); // line ini adalah contoh looping rekursif yang mengurangi angka sebanyak 1 di setiap iterasi nya
    }
}

console.log(rec(10));