function decimalToBinary(num) {
    let localNum = num 
    let binary = '', base = 2
      
    while(localNum > 0) {
      binary = (localNum % base) + binary
      localNum = Math.floor(localNum / base)
    }
    //binary = localNum.toString(2)

    return binary 
}

function binaryToDecimal(binary) {
    return binary * 2
}


console.log(decimalToBinary(101))