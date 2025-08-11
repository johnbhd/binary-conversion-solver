
export function DecimalToBinary({ step, result }) {
  return (
    <div>
        {step.currentNum} % {result.base} = 
        <span className='font-semibold'> {step.remainder} </span>→ binary so far: 
        <span className='font-semibold'> {step.binarySoFar}</span> 
    </div>
  )
}

export function DecimalToOctal({ step, result, index, toBase }) {
  return (
    <div>
        {step.currentNum} ÷ 8 = 
            <span className='font-semibold'> {step.quotient} </span>→ remainder 
            <span className='font-semibold'> {step.remainder}</span> 

            {index === result.steps.length - 1 && (
                <p>Read from bottom to top →   <span className='font-semibold'>{result[toBase]}₈</span></p>
        )}
    </div>
  )
}

export function DecimalToHexadecimal({ step, result, index, toBase, hexaMap }) {
  return (
    <div>
        {step.currentNum} ÷ 16 = 
        <span className='font-semibold'> {step.quotient} </span>→ remainder 
        <span className='font-semibold'> {step.remainder}</span> 

        {index === result.steps.length - 1 && (
            <p>
            Read from bottom to top → <span className='font-semibold'>{result[toBase]}₁₆</span>
            </p>
        )}
    

        {/* Hexadecimal Table (only on last step) */}
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
