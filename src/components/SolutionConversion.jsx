  import { useEffect, useState } from "react"
  import { decimalToBinary } from "../utils/conversion.js"
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
          <p key={index} className='text-justify tracking-wide'>
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

          </p>
        ))} 
      </div>
    )
  }

  export default SolutionConversion