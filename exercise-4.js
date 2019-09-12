function totalDigitRekursif(angka) {
    // you can only write your code here!
    var angkaStr = angka.toString();
    //dibawah ini kondisi looping normal
    /* 
    var result = 0;
    for (var i = 0; i < angkaStr.length; i++) {
        result += Number(angkaStr.charAt(i));
    }
    return result; */

    //dibawah ini kondisi looping rekursif
    /*  var i = 0;
     if (i == angkaStr.length) {
          return result;
     } */
    if (angkaStr.length == 1) {
        return Number(angkaStr);
    }

    /* else {
        result += Number(angkaStr[i]);
        i++;
        return result + totalDigitRekursif(angka);
    } */
    else {
        return Number(angkaStr.charAt(0)) + totalDigitRekursif(Number(angkaStr.slice(1, angka.length)));
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5