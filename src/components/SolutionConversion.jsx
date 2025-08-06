  import { useEffect, useState } from "react"
  import { decimalToBinary } from "../utils/conversion.js"
  import { useConversion } from "../hooks/useConversion.js"

  function SolutionConversion({fromBase, toBase, number, binaryComputed }) {
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
      if (binaryComputed) {
        binaryComputed(result.binary)
      }
    })

    console.log(result.binary)
    return (
      <div>
          {result?.steps?.map((step, index) => (
              <p key={index} className='text-justify tracking-wide'>{step.currentNum} % {result.base} = 
              <span className='font-semibold'> {step.remainder} </span>→ binary so far: 
              <span className='font-semibold'> {step.binarySoFar}</span> </p>
          ))} 
      </div>
    )
  }

  export default SolutionConversion