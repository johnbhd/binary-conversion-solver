import { decimalToBinary } from "./conversion"
import { binaryToDecimal } from "./conversion"
import { binaryToOctal } from "./conversion"
import { octalToBinary } from "./conversion"

export const conversionMap = {
  "decimal->binary": decimalToBinary,
  "decimal->octal": 'decimalToOctal',
  "decimal->hexadecimal": 'decimalToHexadecimal',

  "binary->decimal": binaryToDecimal,
  "binary->octal": binaryToOctal,
  "binary->hexadecimal": 'binaryToHexadecimal',

  "octal->decimal": 'octalToDecimal',
  "octal->binary": octalToBinary,
  "octal->hexadecimal": 'octalToHexadecimal',

  "hexadecimal->decimal": 'hexadecimalToDecimal',
  "hexadecimal->binary": 'hexadecimalToBinary',
  "hexadecimal->octal": 'hexadecimalToOctal'
}
