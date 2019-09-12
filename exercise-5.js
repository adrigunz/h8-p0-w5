function kaliTerusRekursif(angka) {
    // you can only write your code here!
    //dibawah ini versi normal looping
    var angkaStr = angka.toString();
    /*   var result = 1;
       var resStr = result.toString();
       for (var i = 0; i < angkaStr.length; i++) {
           if (angkaStr.length == 1) {
               return Number(angkaStr[i]);
           } else if (angkaStr.length > 1) {
               result *= Number(angkaStr[i]);
           } else if (resStr.length > 1) {
               result *= Number(resStr[i]);
           }

       }

       if (resStr.length == 1) {
           return result;
       } 
    */

    //dibawah ini versi recursive
    if (angkaStr.length == 1) {
        return Number(angkaStr);
    } else {
        return kaliTerusRekursif(Number(angkaStr.charAt(0)) * kaliTerusRekursif(Number(angkaStr.slice(1, angka.length))));
    }

}



// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6