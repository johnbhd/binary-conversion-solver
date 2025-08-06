import { conversionMap } from "../utils/conversionMap"

export function useConversion(fromBase, toBase, value) {
  console.log(`Froms: ${fromBase}`)
  console.log(`Tos: ${toBase}`)

  const baseMap = {
    binary: 2,
    octal: 8,
    decimal: 10,
    hexadecimal: 16
  }

  if (!baseMap[fromBase] || !baseMap[toBase]) {
    return "Invalid value error"
  }

    const key = `${fromBase}->${toBase}`
    const convert = conversionMap[key]

    if (!convert) return { error: "Error conversion not supported"}
  
    return convert(value)

}