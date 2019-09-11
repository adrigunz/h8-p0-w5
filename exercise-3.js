function makanTerusRekursif(waktu) {
    // you can only write your code here!
    var count = 0;
    if (waktu == 0) {
        return waktu;
    }

    //yang dibawah ini looping normal
    /*    while (waktu > 0) {
            waktu -= 15;
            count++;
            if (waktu <= 0) {
                return count;
            }
        } */

    //yang dibawah ini looping rekursif
    if (waktu <= 0) {
        return count;
    } else {
        count++;
        return count + makanTerusRekursif(waktu - 15);
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0