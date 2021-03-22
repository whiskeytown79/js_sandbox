const thousands = [ "", "M", "MM", "MMM" ];
const hundreds = [ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" ];
const tens = [ "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" ];
const ones = [ "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" ];

function intToRoman(num) {
    if (num < 1 || num > 3999) {
        return "";
    }
    let result = thousands[Math.floor(num / 1000)];
    num = num % 1000;
    result += hundreds[Math.floor(num / 100)];
    num = num % 100;
    result += tens[Math.floor(num / 10)];
    num = num % 10;
    result += ones[num];
    return result;
}
module.exports = intToRoman;