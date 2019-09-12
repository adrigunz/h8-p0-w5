function rec(angka) { // ini recursive versi while
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

//convert for loop to recursion

//for loop:
/*function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  alert( pow(2, 3) ); // 8 */

//recursive loop:
/*function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
  
alert( pow(2, 3) ); // 8 */