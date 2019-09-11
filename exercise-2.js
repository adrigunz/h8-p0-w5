function changeVocals(str) {
    //code di sini
    var kos = '';
    for (var a = 0; a < str.length; a++) {
        switch (str.charAt(a)) {
            case 'a':
                kos += 'b';
                break;
            case 'i':
                kos += 'j';
                break;
            case 'u':
                kos += 'v';
                break;
            case 'e':
                kos += 'f';
                break;
            case 'o':
                kos += 'p';
                break;
            case 'A':
                kos += 'B';
                break;
            case 'I':
                kos += 'J';
                break;
            case 'U':
                kos += 'V';
                break;
            case 'E':
                kos += 'F';
                break;
            case 'O':
                kos += 'P';
                break;
            default:
                kos += str.charAt(a);
        }
    }
    return kos;
}

function reverseWord(str) {
    //code di sini
    var emp = '';
    for (var b = str.length - 1; b >= 0; b--) {
        emp += str.charAt(b);
    }
    return emp;
}

function setLowerUpperCase(str) {
    //code di sini
    var nul = '';
    for (var c = 0; c < str.length; c++) {
        if (str.charCodeAt(c) >= 65 && str.charCodeAt(c) <= 90) {
            nul += str.charAt(c).toLowerCase();
        } else {
            nul += str.charAt(c).toUpperCase();
        }
    }
    return nul;
}

function removeSpaces(str) {
    //code di sini
    var kal = '';
    for (var d = 0; d < str.length; d++) {
        if (str.charAt(d) == ' ') {
            kal += '';
        } else {
            kal += str.charAt(d);
        }
    }
    return kal;
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return `Minimal karakter yang diinputkan adalah 5 karakter`;
    }
    var hurufPlusOne = changeVocals(name);
    var balik = reverseWord(hurufPlusOne);
    var tukarKecilGede = setLowerUpperCase(balik);
    var hapusSpasi = removeSpaces(tukarKecilGede);
    return hapusSpasi;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'