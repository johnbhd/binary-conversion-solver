import React from 'react'

function SolutionArea({ submit }) {
  let num = Number(submit)
  let base = 2
  let result = ''

  const decimalToBinary = () => {
    let cal = 0
    cal = num  * base
    result = cal
    return result
  }

  return (
    <div className='space-y-3'> 
        <p>Answer: {submit}</p>
        <h2 >Solution: </h2>
        <div className='px-2'>
            <p>{decimalToBinary()}</p>
        </div>
        
    </div>
  )
}

export default SolutionArea