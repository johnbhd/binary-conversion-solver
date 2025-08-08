  import { useEffect, useState } from "react"
  import { useConversion } from "../hooks/useConversion.js"

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
              {/* Decimal → Binary */}
              {fromBase === 'decimal' && toBase === 'binary' && (
                <>
                  {step.currentNum} % {result.base} = 
                    <span className='font-semibold'> {step.remainder} </span>→ binary so far: 
                    <span className='font-semibold'> {step.binarySoFar}</span> 
                </>
              )}

              {/* Binary → Decimal */}
                {fromBase === 'binary' && toBase === 'decimal' && (
                  <>
                    {step.bit} × 2<sup>{step.power}</sup> = 
                      <span className='font-semibold'> {step.value} </span> <br/>
                      {index === result.steps.length - 1 && (
                          <span className='font-semibold mt-10'>Sum: {result.equation} = {result[toBase]}</span>

                      )}

                  </>
                )}
              {/* Binary → Octal */}
                {fromBase === 'binary' && toBase === 'octal' && (
                  <>
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

                  </>
                )}
                
          </div>
        ))} 
      </div>
    )
  }

  export default SolutionConversion