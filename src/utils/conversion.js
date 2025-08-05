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


