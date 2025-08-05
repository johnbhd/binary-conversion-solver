import { useEffect } from "react"
import { decimalToBinary } from "../utils/conversion.js"

function SolutionConversion({ number, binaryComputed }) {
  const {
    base, 
    binary,
    steps
  } = decimalToBinary(number)

  useEffect(() => {
    if (binaryComputed) {
        binaryComputed(binary)
    }
  }, [binary, binaryComputed])

  return (
    <div>
        {steps.map((step, index) => (
            <p key={index} className='text-justify tracking-wide'>{step.currentNum} % {base} = 
            <span className='font-semibold'> {step.remainder} </span>→ binary so far: 
            <span className='font-semibold'> {step.binarySoFar}</span> </p>
        ))}
    </div>
  )
}

export default SolutionConversion