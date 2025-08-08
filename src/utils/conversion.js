export function octalToBinary(octal) {
  return octal
}
 
export function binaryToOctal(binary) {
  let b = [], steps = []
  binary = String(binary)
  
  const pad = (3 - (binary.length % 3)) % 3
  binary = "0".repeat(pad) +binary

  for (let i = 0; i < binary.length; i += 3) {
    b.push(binary.slice(i, i + 3))
  }
  
  let octalDigit = b.map(deci => parseInt(deci, 2))

  steps.push({
    chunks: b,
    decimalValue: octalDigit
  })

  return {octal: octalDigit.join(""), steps}
}

export function binaryToDecimal(binary) {
  let decimal = 0, steps = [], length = binary.length
  let equation = []
  for (let i = 0; i < length; i++) {
    let bit = Number(binary[i]) 
    let power = length - 1 - i

    let value = bit * (2 ** power)
    decimal += value


    steps.push({
      bit,
      power,
      value,
      decimalSofar: decimal
    })
    
    equation.push(value)

  }
  return { 
    decimal, 
    steps, 
    equation: equation.join(" + ") 
  }
}

export function decimalToBinary(decimal) {
  let localNum = decimal, binary = '', base = 2
  let steps = []

  while (localNum > 0) {
    let currentNum = localNum
    let remainder = currentNum % base
    binary = remainder + binary

    steps.push({
      currentNum,
      remainder,
      binarySoFar: binary
    })  

    localNum = Math.floor(localNum / base)
  }  

  return {base, binary, steps}
}  



