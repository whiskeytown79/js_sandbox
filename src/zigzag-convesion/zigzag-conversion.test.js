const convert = require('./zigzag-conversion');

test('leetcode example 1', () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});

test('leetcode example 2', () => {
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
});

test('leetcode example 3', () => {
    expect(convert("A", 1)).toBe("A");
});

test('rowCount is 1', () => {
    expect(convert("ABCDEFG", 1)).toBe("ABCDEFG");
});

test('rowCount is equal to or greater than string length', () => {
    expect(convert("ABCDEFG", 7)).toBe("ABCDEFG");
    expect(convert("ABCDEFG", 25)).toBe("ABCDEFG");
});

test('rowCount is 2, should roughly alternate letters', () => {
    expect(convert("ABCDEFG", 2)).toBe("ACEGBDF");
    expect(convert("ABCDEFGH", 2)).toBe("ACEGBDFH");
});

/*
 ABCDEFG, rowcount 4
 A  G
 B F
 CE
 D
 AGBFCED
 */
test('rowCount is (s.length / 2) - 1, makes a V shape', () => {
    expect(convert("ABCDEFG", 4)).toBe("AGBFCED");
});

/*
 ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789, rowcount 4
 A  G  M  S  Y  4
 B FH LN RT XZ 35 9
 CE IK OQ UW 02 68
 D  J  P  V  1  7
 AGMSY4BFHLNRTXZ359CEIKOQUW0268DJPV17

 ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789, rowcount 6
 A    K    U    4
 B   JL   TV   35
 C  I M  S W  2 6
 D H  N R  X 1  7
 EG   OQ   Y0   8
 F    P    Z    9
 AKU4BJLTV35CIMSW26DHNRX17EGOQY08FPZ9

 ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789, rowcount 7
 A     M     Y
 B    LN    XZ    9
 C   K O   W 0   8
 D  J  P  V  1  7
 E I   Q U   2 6
 FH    RT    35
 G     S     4
 AMYBLNXZ9CKOW08DJPV17EIQU26FHRT35GS4
 */
test('bigger examples 36 character inputs', () => {
    expect(convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 4)).toBe("AGMSY4BFHLNRTXZ359CEIKOQUW0268DJPV17");
    expect(convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6)).toBe("AKU4BJLTV35CIMSW26DHNRX17EGOQY08FPZ9");
    expect(convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 7)).toBe("AMYBLNXZ9CKOW08DJPV17EIQU26FHRT35GS4");
});