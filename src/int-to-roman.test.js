const intToRoman = require('./int-to-roman');

test('outside range 1 to 3999 gives empty result', () => {
    expect(intToRoman(0)).toBe("");
    expect(intToRoman(-1)).toBe("");
    expect(intToRoman(4000)).toBe("");
    expect(intToRoman(Number.MIN_SAFE_INTEGER)).toBe("");
    expect(intToRoman(Number.MAX_SAFE_INTEGER)).toBe("");
});

test('one through twenty comprehensive', () => {
    expect(intToRoman(1)).toBe("I");
    expect(intToRoman(2)).toBe("II");
    expect(intToRoman(3)).toBe("III");
    expect(intToRoman(4)).toBe("IV");
    expect(intToRoman(5)).toBe("V");
    expect(intToRoman(6)).toBe("VI");
    expect(intToRoman(7)).toBe("VII");
    expect(intToRoman(8)).toBe("VIII");
    expect(intToRoman(9)).toBe("IX");
    expect(intToRoman(10)).toBe("X");
    expect(intToRoman(11)).toBe("XI");
    expect(intToRoman(12)).toBe("XII");
    expect(intToRoman(13)).toBe("XIII");
    expect(intToRoman(14)).toBe("XIV");
    expect(intToRoman(15)).toBe("XV");
    expect(intToRoman(16)).toBe("XVI");
    expect(intToRoman(17)).toBe("XVII");
    expect(intToRoman(18)).toBe("XVIII");
    expect(intToRoman(19)).toBe("XIX");
    expect(intToRoman(20)).toBe("XX");
});

test('tens boundaries below 100', () => {
    expect(intToRoman(29)).toBe("XXIX");
    expect(intToRoman(30)).toBe("XXX");
    expect(intToRoman(39)).toBe("XXXIX");
    expect(intToRoman(40)).toBe("XL");
    expect(intToRoman(49)).toBe("XLIX");
    expect(intToRoman(50)).toBe("L");
    expect(intToRoman(59)).toBe("LIX");
    expect(intToRoman(60)).toBe("LX");
    expect(intToRoman(69)).toBe("LXIX");
    expect(intToRoman(70)).toBe("LXX");
    expect(intToRoman(79)).toBe("LXXIX");
    expect(intToRoman(80)).toBe("LXXX");
    expect(intToRoman(89)).toBe("LXXXIX");
    expect(intToRoman(90)).toBe("XC");
    expect(intToRoman(99)).toBe("XCIX");
});

test('various hundreds values', () => {
    expect(intToRoman(149)).toBe("CXLIX");
    expect(intToRoman(199)).toBe("CXCIX");
    expect(intToRoman(499)).toBe("CDXCIX");
    expect(intToRoman(625)).toBe("DCXXV");
    expect(intToRoman(777)).toBe("DCCLXXVII");
    expect(intToRoman(888)).toBe("DCCCLXXXVIII");
    expect(intToRoman(999)).toBe("CMXCIX");
});

test('various thousands values', () => {
    expect(intToRoman(1001)).toBe('MI');
    expect(intToRoman(1999)).toBe('MCMXCIX');
    expect(intToRoman(2021)).toBe('MMXXI');
    expect(intToRoman(2222)).toBe('MMCCXXII');
    expect(intToRoman(3333)).toBe('MMMCCCXXXIII');
    expect(intToRoman(3999)).toBe('MMMCMXCIX');
});