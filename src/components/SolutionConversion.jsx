import { useEffect, useState } from "react"
import { useConversion } from "../hooks/useConversion.js"
import { hexaMap, hexToBinMap } from "../utils/conversionMap.js"
import { DecimalToBinary, DecimalToOctal, DecimalToHexadecimal } from "./conversion/DecimalConversion.jsx"
import { BinaryToDecimal, BinaryToHexadecimal, BinaryToOctal } from "./conversion/BinaryConversion.jsx"
import { OctalToBinary, OctalToDecimal, OctalToHexadecimal } from "./conversion/OctalConversion.jsx"
import { HexaDecimalToBinary, HexaDecimalToDecimal, HexadecimalToOctal } from "./conversion/HexaDecimalConversion.jsx"

function SolutionConversion({fromBase, toBase, number, resultComputed }) {
  const [result, setResult] = useState('')
  
  useEffect(() => {
    if (fromBase && toBase && number !== "") {
      const conversion = useConversion(fromBase, toBase, number)
      
      if (typeof conversion === "object" && conversion.result) {
        setResult(conversion.result)
      } else {
        setResult(conversion)
      }
    }
  }, [fromBase, toBase, number])

  useEffect(() => {
    if (resultComputed && result[toBase]) {
      resultComputed(result[toBase])
    }
  }, [result, toBase, resultComputed])

  console.log(`Result: ${result[toBase]}`)
  return (
    <div>
      {result?.steps?.length > 0 &&
      result?.steps?.map((step, index) => (
        <div key={index} className='text-justify tracking-wide'>
            {/* Decimal → Binary */ console.log(step)}    
              {fromBase === 'decimal' && toBase === 'binary' && (
                <DecimalToBinary step={step} result={result}/>
              )}
            
            {/* Decimal → Octal */}
              {fromBase === 'decimal' && toBase === 'octal' && (
                <DecimalToOctal step={step} result={result} index={index} toBase={toBase}/>  
              )}
            {/* Decimal → Hexadecimal */}
              {fromBase === 'decimal' && toBase === 'hexadecimal' && (
                <DecimalToHexadecimal step={step} result={result} index={index} toBase={toBase} hexaMap={hexaMap}/>   
              )}

            {/* Binary → Decimal */}
              {fromBase === 'binary' && toBase === 'decimal' && (
                <BinaryToDecimal step={step} result={result} index={index} toBase={toBase} />   
              )}
            {/* Binary → Octal */}
              {fromBase === 'binary' && toBase === 'octal' && (
                <BinaryToOctal step={step} result={result} index={index} toBase={toBase} />     
              )}
            {/* Binary → Hexadecimal */}
              {fromBase === 'binary' && toBase === 'hexadecimal' && (
                <BinaryToHexadecimal step={step} result={result} index={index} toBase={toBase} hexaMap={hexaMap} number={number}/>     
              )}

            {/* Octal → Decimal */}
              {fromBase === 'octal' && toBase === 'decimal' && (
                <OctalToDecimal step={step} result={result} index={index} toBase={toBase} />     
              )}

            {/* Octal → Binary */}
              {fromBase === 'octal' && toBase === 'binary' && (
                <OctalToBinary step={step} result={result} index={index} toBase={toBase} />     
              )}
            {/* Octal → Hexadecimal */}
              {fromBase === 'octal' && toBase === 'hexadecimal' && (
                <OctalToHexadecimal step={step} result={result} index={index} toBase={toBase} hexaMap={hexaMap}/>     
              )}

            {/* Hexadecimal → Decimal */}
              {fromBase === 'hexadecimal' && toBase === 'decimal' && (
                <HexaDecimalToDecimal step={step} result={result} index={index} toBase={toBase} hexaMap={hexaMap}/>     
              )}
            {/* Hexadecimal → Binary */}
              {fromBase === 'hexadecimal' && toBase === 'binary' && (
                <HexaDecimalToBinary step={step} result={result} index={index} toBase={toBase} hexToBinMap={hexToBinMap}/>     
              )}
            {/* Hexadecimal → Octal */}
              {fromBase === 'hexadecimal' && toBase === 'octal' && (
                <HexadecimalToOctal step={step} result={result} index={index} toBase={toBase} hexToBinMap={hexToBinMap}/>     
              )}
        </div>
      ))} 
    </div>
  )
}

export default SolutionConversion