import { 
  decimalToBinary,
  binaryToDecimal,
  binaryToOctal,
  octalToBinary,
  decimalToOctal,
  decimalToHexadecimal,
  binaryToHexadecimal,
  octalToDecimal,
  octalToHexadecimal,
  hexadecimalToDecimal,
  hexadecimalToBinary,
  hexadecimalToOctal
} from "./conversion"


export const conversionMap = {
  "decimal->binary": decimalToBinary,
  "decimal->octal": decimalToOctal,
  "decimal->hexadecimal": decimalToHexadecimal,

  "binary->decimal": binaryToDecimal,
  "binary->octal": binaryToOctal,
  "binary->hexadecimal": binaryToHexadecimal,

  "octal->decimal": octalToDecimal,
  "octal->binary": octalToBinary,
  "octal->hexadecimal": octalToHexadecimal,

  "hexadecimal->decimal": hexadecimalToDecimal,
  "hexadecimal->binary": hexadecimalToBinary,
  "hexadecimal->octal": hexadecimalToOctal
}

export const hexaMap = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
};

export const hexToBinMap = {
    '0': '0000',
    '1': '0001',
    '2': '0010',
    '3': '0011',
    '4': '0100',
    '5': '0101',
    '6': '0110',
    '7': '0111',
    '8': '1000',
    '9': '1001',
    'A': '1010',
    'B': '1011',
    'C': '1100',
    'D': '1101',
    'E': '1110',
    'F': '1111'
  };