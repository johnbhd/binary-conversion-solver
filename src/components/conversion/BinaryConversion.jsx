
export function BinaryToDecimal({ step, result, index, toBase }) {
  return (
    <div>
        {step.bit} × 2<sup>{step.power}</sup> = 
            <span className='font-semibold'> {step.value} </span> <br/>
            {index === result.steps.length - 1 && (
                <span className='font-semibold mt-10'>Sum: {result.equation} = {result[toBase]}</span>

            )}  
    </div>
  )
}

export function BinaryToOctal({ step, result, index, toBase }) {
  return (
    <div>
       <table className="border border-white text-center">
          <tbody>
            <tr>
              {step.chunks?.map((c, index) => (
                <td key={index} className="p-3 border border-white">{c}</td>
              ))}
            </tr>
            <tr>
                {step.decimalValue?.map((c, index) => (
                  <td key={index} className="p-3 border border-white">{c}</td>
                ))}
            </tr>
          </tbody>
        </table>
        <div className="mt-5 space-y-2">
            <p>Group the binary number into sets of 3 bits from left to right.</p>
            <p>Convert each group into its decimal value — this becomes the octal digit.</p>
            <p>  
              {step.chunks?.map((c, index) => (
                <span key={index}> {c}</span>
              ))} → {step.decimalValue?.map((c, index) => (
                <span key={index}> {c}</span>
              ))} → Octal

              {index === result.steps.length - 1 && (
                <span className='font-semibold '> {result.equation} = {result[toBase]}</span>
              )}
            </p>
        </div>
    </div>
  )
}

export function BinaryToHexadecimal({ step, result, index, toBase, hexaMap, number }) {
  return (
    <div>
      <div className="space-y-2">
          <p><span className='font-semibold'>1.</span> Group into 4 bits (from right to left)</p>

          <p className="ml-4">
          {number} →   
          {step.binaryChunks?.map((c, index) => (
              <span key={index}> {c}</span>
          ))}

          </p>

          <p><span className='font-semibold'>2.</span> Convert each group to decimal</p>
          <div className="mt-3 ml-4">
            {step.binaryChunks?.map((chunk, index) => (
              <div key={index}>
                {chunk}
                <sub>2</sub> = {step.decimalValues?.[index]}
              </div>
            ))}
        </div>

          <p><span className='font-semibold'>3.</span> Convert decimal values 10–15 to hex letters</p>
            <div className="mt-3 ml-4">
            {step.decimalValues?.map((chunk, index) => (
              <div key={index}>
                {chunk} → {step.hexDigits?.[index]}
              </div>
            ))}
        </div>

              {index === result.steps.length - 1 && (
                <p>
                  Put them together → <span className='font-semibold'>{result[toBase]}₁₆</span>
                </p>
              )}
        </div>
        
            {/* Hexadecimal Table  */}
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