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



