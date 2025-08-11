
export function OctalToDecimal({ step, result, index, toBase }) {
  return (
    <div>
        {step.digit} x 8<sup>{step.power}</sup> =  
            <span className='font-semibold'> {step.value}</span> 

            {index === result.steps.length - 1 && (
                <p className="mt-2"><span className='font-semibold'>Total = {result[toBase]}<sub>10</sub></span></p>
            )}
    </div>
  )
}
export function OctalToBinary({ step, result, index, toBase }) {
    return (
        <div>
        <table className="border border-white text-center">
            <tbody>
                <tr>
                {step.octalDigit?.map((c, index) => (
                    <td key={index} className="p-3 border border-white">{c}</td>
                ))}
                </tr>
                <tr>
                    {step.binaryChunks?.map((c, index) => (
                        <td key={index} className="p-3 border border-white">{c}</td>
                    ))}
                </tr>
            </tbody>
        </table>
        <div className="mt-5 space-y-2">
            <p>Take each octal digit and convert it into its 3-bit binary equivalent.</p>
            <p>Join all binary groups together to get the full binary number.</p>
            <p>  
            {step.octalDigit?.map((c, index) => (
                <span key={index}> {c}</span>
            ))} → {step.binaryChunks?.map((c, index) => (
                <span key={index}> {c}</span>
            ))} → Binary

            {index === result.steps.length - 1 && (
                <span className='font-semibold '> {result.equation} = {result[toBase]}</span>
            )}
            </p>
        </div>
    </div>
  )
}

export function OctalToHexadecimal({ step, result, index, toBase, hexaMap }) {
  return (
    <div>
       <div className="space-y-1">
        <p><span className='font-semibold'>1.</span> Octal → Binary (3 bits per octal digit)</p>
        <div className=" ml-4">
            {step.octalDigits?.map((chunk, index) => (
            <div key={index}>
                {chunk}<sub>8</sub> = {step.binaryChunks?.[index]}<sub>2</sub>
            </div>
            ))}
            <p>Binary result: {step.binaryChunks?.join("")}</p>
        </div>
        <p className="mt-2"><span className='font-semibold'>2.</span> Pad binary to groups of 4 bits</p>
        <div className=" ml-4">
            Binary: {step.binaryChunks?.join("")} → {step.binaryPadded}
        </div>

        <p className="mt-2"><span className='font-semibold'>3.</span> Binary → Hexadecimal (4 bits per hex digit)</p>
        <div className=" ml-4">
            {step.binaryToHexChunks?.map((chunk, index) => (
            <div key={index}>
                {chunk}<sub>2</sub> = {step.decimalValues?.[index]}<sub>10</sub> → {step.hexDigits?.[index]}
            </div>
            ))}
        </div>

        {index === result.steps.length - 1 && (
            <p>
            Put them together → <span className='font-semibold'>{result[toBase]}₁₆</span>
            </p>
        )}
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