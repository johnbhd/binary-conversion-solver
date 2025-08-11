import { hexaMap, hexToBinMap } from "./conversionMap";

// DECIMAL
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

export function decimalToHexadecimal(decimal) {
  let steps = []
  let n = Number(decimal)
  let remainders = []
  
  
  while (n > 0) {
    let remainder = n % 16;
    let hexaDigit = remainder.toString(16).toUpperCase()
    remainders.push(hexaDigit)
    steps.push({
      currentNum: n,
      quotient: Math.floor(n / 16),
      remainder: hexaDigit
    })
    n = Math.floor(n / 16)
  }
  return {hexadecimal: remainders.reverse().join(""), steps}
}

export function decimalToOctal(decimal) {
  let steps = []
  let n = Number(decimal)
  let remainders = []
  
  while (n > 0) {
    let remainder = n % 8;
    remainders.push(remainder)
    steps.push({
      currentNum: n,
      quotient: Math.floor(n / 8),
      remainder
    })
    n = Math.floor(n / 8)
  }
  return {octal: remainders.reverse().join(""), steps}
}

// BINARY
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
export function binaryToOctal(binary) {
  let b = [], steps = []
  binary = String(binary)
  
  const pad = (3 - (binary.length % 3)) % 3
  binary = "0".repeat(pad) + binary
  
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


export function binaryToHexadecimal(binary) {
  let steps = [], chunks = [], hexDigits = []
  binary = String(binary)
  
  const pad = (4 - (binary.length % 4)) % 4
  binary = "0".repeat(pad) + binary
  
  for (let i = 0; i < binary.length; i += 4) {
    chunks.push(binary.slice(i, i + 4 ))
  }
  
  chunks.forEach(chunk => {
    let decimalValue = parseInt(chunk, 2)
    let hexDigit = decimalValue >= 10 ? hexaMap[decimalValue] : decimalValue.toString()
    hexDigits.push(hexDigit)
  })
  
  steps.push({
    bi: binary,
    binaryChunks: chunks,
    decimalValues: chunks.map(c => parseInt(c, 2)),
    hexDigits: hexDigits
  })
  
  return {hexadecimal: hexDigits.join(""), steps}
}


// OCTAL
export function octalToDecimal(octal) {
  octal = String(octal)
  let steps = []
  let decimalValue = 0  
  let power = octal.length - 1

  for (let i = 0; i < octal.length; i++) {
    const digit  = parseInt(octal[i], 10)
    const value = digit * Math.pow(8, power - i)
    
    steps.push({
      digit,
      power: power - i,
      value
    })
    decimalValue += value
  }
  
  
  return {decimal: decimalValue, steps}
}

export function octalToBinary(octal) {
  let chunks = [], steps = []
  octal = String(octal)
  
  for (let i = 0; i < octal.length; i++) {
    let bin = parseInt(octal[i], 8).toString(2)
    bin = bin.padStart(3, "0")
    chunks.push(bin)
  }
  
  steps.push({
    octalDigit: octal.split(""),
    binaryChunks: chunks
  })
  
  return {binary: chunks.join(""), steps}
}


export function octalToHexadecimal(octal) {
  octal = String(octal);
  const steps = [];
  const hexChunks = [];
  const decimalValues = [];

  // Step 1: Octal → Binary (3 bits each)
  const octalDigits = octal.split("");
  const binaryChunks = octalDigits.map(digit =>
    parseInt(digit, 8).toString(2).padStart(3, "0")
  );
  const binary = binaryChunks.join("");

  // Step 2: Pad binary to groups of 4 bits
  const pad = (4 - (binary.length % 4)) % 4;
  const binaryPadded = "0".repeat(pad) + binary;
  const binaryToHexChunks = binaryPadded.match(/.{1,4}/g);

  // Step 3: Binary → Decimal & Hex
  for (let i = 0; i < binaryToHexChunks.length; i++) {
    const chunk = binaryToHexChunks[i];
    const decimalValue = parseInt(chunk, 2);
    decimalValues.push(decimalValue);
    hexChunks.push(decimalValue >= 10 ? hexaMap[decimalValue] : decimalValue.toString());
  }

  // Push all data as ONE step object
  steps.push({
    octalDigits,
    binaryChunks,
    binary,
    binaryPadded,
    binaryToHexChunks,
    decimalValues,
    hexDigits: hexChunks
  });

  return {
    hexadecimal: hexChunks.join(""),
    steps
  };
}


// HEXADECIMAL
export function hexadecimalToDecimal(hex) {
  hex = String(hex).toUpperCase();

  const hexDigits = hex.split("");
  const decimalDigits = hexDigits.map(d => parseInt(d, 16));

  const powers = [];
  let sum = 0;
  for (let i = 0; i < hexDigits.length; i++) {
    const power = hexDigits.length - 1 - i;
    const digit = decimalDigits[i];
    const value = digit * Math.pow(16, power);
    sum += value;
    powers.push({ digit, power, value, hexDigit: hexDigits[i] });
  }

  return {
    decimal: sum,
    steps: [
      {
        hexDigits,
        decimalDigits,
        powers,
        sum
      }
    ]
  };
}


export function hexadecimalToBinary(hex) {
  hex = String(hex).toUpperCase();

  // Map each hex digit to its 4-bit binary equivalent
  const hexDigits = hex.split("");
  const binaryDigits = hexDigits.map(d => parseInt(d, 16).toString(2).padStart(4, "0"));

  // Combine all binary parts into one binary string
  const binary = binaryDigits.join("");

  // Prepare steps for detailed explanation
  const steps = hexDigits.map((hexDigit, i) => ({
    hexDigit,
    decimalValue: parseInt(hexDigit, 16),
    binaryValue: binaryDigits[i]
  }));

  return {
    binary,
    steps
  };
}

export function hexadecimalToOctal(hex) {
  hex = String(hex).toUpperCase();

  const steps = [];

  // Step 1: Hex → Binary (4 bits per hex digit)
  const hexDigits = hex.split("");
  const binaryDigits = hexDigits.map(d => parseInt(d, 16).toString(2).padStart(4, "0"));
  const binary = binaryDigits.join("");

  // Step 2: Binary → Octal (3 bits per octal digit)
  const paddedBinary = binary.padStart(Math.ceil(binary.length / 3) * 3, "0");

  const binaryGroups = [];
  for (let i = 0; i < paddedBinary.length; i += 3) {
    binaryGroups.push(paddedBinary.substr(i, 3));
  }

  const octalDigits = binaryGroups.map(bits => parseInt(bits, 2).toString(8));
  const octal = octalDigits.join("").replace(/^0+/, "") || "0";

  // Push one object to steps containing all relevant arrays and values
  steps.push({
    hexDigits,
    binaryDigits,
    binary,
    paddedBinary,
    binaryGroups,
    octalDigits,
    octal
  });

  return { octal, steps };
}
