function reverse(s){
    return s.split("").reverse().join("");
}

const palindromes = function (text) {
    cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase()
    reversedText = reverse(cleanedText)
    return cleanedText === reversedText
};

// Do not edit below this line
module.exports = palindromes;
