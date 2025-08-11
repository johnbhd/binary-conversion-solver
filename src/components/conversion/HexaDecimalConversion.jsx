export function HexaDecimalToDecimal({ step, result, index, toBase, hexaMap }) {
  return (
    <div className="space-y-2">
        <p>1. Expand by place values (Hex digits → decimal values)</p>
        <div className="ml-4">
           {step.hexDigits?.map((chunk, index) => (
              <div key={index}>
                {chunk}
                <sub>16</sub> = {step.decimalDigits?.[index]}<sub>10</sub>
              </div>
            ))}
        </div>
        <p>2. Multiply by powers of 16 (from right to left)</p>

        {step.decimalDigits?.map((chunk, index) => (
        <div key={index} className="ml-4">
          {chunk} x 16<sub>{step.powers?.[index]?.power}</sub> = {step.powers?.[index]?.value}
        </div>
        ))}
        <p>3. Add them All</p>
        <div className="ml-4 font-semibold">
          {step.powers?.map((p, index) => (
            <span key={index}>
              {p.value}
              {index !== step.powers.length - 1 && " + "}
            </span>
          ))}
          {" = "}
          {result[toBase]}
        </div>
        
        {/* Hexadecimal Table */}
        {index === result.steps.length - 1 && (
        <div className="mt-3">
            <p className="font-semibold">Hexadecimal Digit Table</p>
            <table className="border border-white text-center mt-3">
            <tbody>
                {Object.entries(hexaMap).map(([decimal, hex]) => (
                <tr key={decimal}>
                    <td className="px-12 py-1 border border-white">{hex}</td>
                    <td className="px-12 py-1 border border-white">{decimal}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        )}                                         
    </div>
  )
}
export function HexaDecimalToBinary({ step, result, index, toBase, hexToBinMap }) {
  return (
    <div className="space-y-2">
           {index === 0 && <p>1. Convert each hex digit to 4-bit binary</p>}
      <div className="ml-4">
        {step.hexDigit}
        <sub>16</sub> = {step.binaryValue}
        <sub>2</sub>
      </div>

      {index === result.steps.length - 1 && (
        <>
          <p>2. Combine all binary digits to form the final binary number</p>
          <div className="ml-4 font-semibold">{result[toBase]}</div>
        </>
      )}

        {/* Hexadecimal Table */}
        {index === result.steps.length - 1 && (
        <div className="mt-3">
            <p className="font-semibold">Hexadecimal Digit Table</p>
            <table className="border border-white text-center mt-3">
            <tbody>
                {Object.entries(hexToBinMap).map(([decimal, hex]) => (
                <tr key={decimal}>
                    <td className="px-12 py-1 border border-white">{hex}</td>
                    <td className="px-12 py-1 border border-white">{decimal}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        )}             
    </div>
  );
}
export function HexadecimalToOctal({ step, result, index, toBase, hexToBinMap }) {
  return (
    <div className="space-y-2">
           {index === 0 && <p>1. Hexadecimal → Binary (4 bits per hex digit)</p>}
            {step.hexDigits?.map((chunk, index) => (
              <div key={index} className="ml-4">
                {chunk}
                <sub>16</sub> = {step.binaryDigits?.[index]}<sub>2</sub>
              </div>
            ))}
            <p className="ml-4">Binary combined: {step.binary}</p>
            
      {index === result.steps.length - 1 && (
        <>
        <p>2. Pad binary to groups of 3 bits (since 3 bits = 1 octal digit)</p>
        <p className="ml-4">
          {step.binary} →{" "}
          {" "}
          {step.binaryGroups?.map((chunk, index) => (
            <span key={index} className="inline-block mr-2">
              {chunk}
            </span>
          ))}
        </p>
      </>

      )}

      <p>3. Binary groups → Octal digits</p>
          {step.octalDigits?.map((chunk, index) => (
        <div key={index} className="ml-4">
          {chunk}
          <sub>2</sub> = {step.octal?.[index]}<sub>8</sub>
        </div>
      ))}
      <p className="ml-4"> <span className="font-semibold">Final Answer:</span>  {result[toBase]}<sub>8</sub></p>
      
        {/* Hexadecimal Table */}
        {index === result.steps.length - 1 && (
        <div className="mt-3">
            <p className="font-semibold">Hexadecimal Digit Table</p>
            <table className="border border-white text-center mt-3">
            <tbody>
                {Object.entries(hexToBinMap).map(([decimal, hex]) => (
                <tr key={decimal}>
                    <td className="px-12 py-1 border border-white">{hex}</td>
                    <td className="px-12 py-1 border border-white">{decimal}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        )}             
    </div>
  );
}
