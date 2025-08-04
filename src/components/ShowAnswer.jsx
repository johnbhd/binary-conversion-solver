import React from 'react'

function ShowAnswer({ submit }) {
  console.log(submit)
  let num = Number(submit.number)
  let base = 2
  
  
  const decimalToBinary = () => {
    let localNum = num 
    let binary = ''
      
    while(localNum > 0) {
      binary = (localNum % base) + binary
      localNum = Math.floor(localNum / base)
    }
    //binary = localNum.toString(2)

    return binary 
  }
  
  const solutionBinary = () => {
    let localNum = num
    let binary = '', line = []

    while (localNum > 0) {
      let currentNum = localNum
      let remainder = currentNum % base
      binary = remainder + binary
      localNum = Math.floor(localNum / base)
  
      line.push(
        <p key={currentNum} className='text-justify tracking-wide'>{currentNum} % {base} = <span className='font-semibold'>{remainder}</span>
          → binary so far: <span className='font-semibold'>{binary}</span> </p>
      )
    }
    return line
  }

  console.log(num)

  return (
    <div className='space-y-3'> 
        <p><span className='font-semibold'>Answer: </span>{decimalToBinary()}</p>
        <h2  className='font-semibold'>Solution:  </h2>
        <div className='px-2'>
            {solutionBinary()}
        </div>
        
    </div>
  )
}

export default ShowAnswer